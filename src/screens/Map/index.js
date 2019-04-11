import React, { Component } from "react";
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Collapsible from "react-native-collapsible";

import { SearchBar, Button } from "../../components/";

import { handlers } from "../../helpers";
import mapStyle from "./mapStyle.json";

import styles from "./styles";
import { icons, images } from "../../utils";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = "AIzaSyB-LQQuqki_hvDEDCiVFkRCLwloNOanGi0";
export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769
        }
      ],
      watchId: "",
      collapsed: true,
      exampleFavoritePlacesData: [
        {
          title: "Work",
          description: "Cafe le visar"
        },
        {
          title: "Home",
          description: "Residence andalusia"
        }
      ],
      exampleRecentPlacesData: [
        {
          title: "Boulevard de l'Atlantide",
          description: "Casablanca"
        },
        {
          title: "Mc Donald's",
          description: "Mc Donald's - - Casablanca"
        },
        {
          title: "Boulevard de l'Atlantide",
          description: "Casablanca"
        },
        {
          title: "Mc Donald's",
          description: "Mc Donald's - - Casablanca"
        }
      ]
    };
    this.mapView = null;
  }

  componentDidMount = async () => {
    const geo = navigator.geolocation;
    await geo.watchPosition(location => {
      this.setState({
        coords: location.coords
      });
    });
  };

  onMapPress = e => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate]
    });
  };

  getCurrentLocationOfRider = async () => {
    await navigator.geolocation.getCurrentPosition(position => {
      console.warn(position);
    });
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  renderCollapsibleView = () => {
    return (
      <View style={{ justifyContent: "center", padding: 10 }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ collapsed: true });
          }}
        >
          <Image source={icons.cancel} style={styles.cancelIcon} />
        </TouchableOpacity>
        <View style={styles.collapsibleSearchBar}>
          <SearchBar />
        </View>
        <ScrollView
          contentContainerStyle={{
            marginTop: 7,
            padding: 20
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.listTitleText}>Favorite places:</Text>
            <FlatList
              data={this.state.exampleFavoritePlacesData}
              renderItem={({ item }) => (
                <View style={styles.listsContainer}>
                  <Image
                    source={
                      item.title === "Work" ? icons.file_icon : icons.home_icon
                    }
                    style={styles.fileHomeIcon}
                  />
                  <View>
                    <Text style={styles.listItemTitle}>{item.title}</Text>
                    <Text style={styles.lisItemDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <Image source={icons.add_icon} style={styles.addIcon} />
                </View>
              )}
            />
            <View style={{}}>
              <Text style={styles.listTitleText}>Recent places:</Text>
              <FlatList
                data={this.state.exampleRecentPlacesData}
                renderItem={({ item }) => (
                  <View style={styles.eachListContainer}>
                    <Image
                      source={icons.recent_icon}
                      style={{ width: 17.2, height: 16, marginRight: 10 }}
                    />
                    <View>
                      <Text style={styles.listTitleText}>{item.title}</Text>
                      <Text style={styles.lisItemDescription}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                )}
              />
              <Text style={styles.showMoreText}>Show more</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.listTitleText}>Close places:</Text>
              <FlatList
                data={this.state.exampleRecentPlacesData}
                renderItem={({ item }) => (
                  <View style={styles.eachListContainer}>
                    <Image
                      source={icons.location_icon}
                      style={styles.locationIcon}
                    />
                    <View>
                      <Text style={styles.listItemTitle}>{item.title}</Text>
                      <Text style={styles.lisItemDescription}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                )}
              />
              <Text style={styles.showMoreText}>Show more</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          style={styles.map}
          ref={c => (this.mapView = c)}
          onPress={this.onMapPress}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        >
          {this.state.coordinates.map((coordinate, index) => (
            <MapView.Marker
              key={`coordinate_${index}`}
              coordinate={coordinate}
            />
          ))}
          {this.state.coordinates.length >= 2 && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={
                this.state.coordinates.length > 2
                  ? this.state.coordinates.slice(1, -1)
                  : null
              }
              destination={
                this.state.coordinates[this.state.coordinates.length - 1]
              }
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="black"
              optimizeWaypoints
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${
                    params.destination
                  }"`
                );
              }}
              onReady={result => {
                console.log("Distance: ${result.distance} km");
                console.log("Duration: ${result.duration} min.");
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20
                  }
                });
              }}
              onError={errorMessage => {
                console.log("GOT AN ERROR", errorMessage);
              }}
            />
          )}
        </MapView>
        <View style={styles.actionsView}>
          <TouchableOpacity onPress={this.getCurrentLocationOfRider}>
            <Image
              source={icons.current_location}
              style={styles.currentLocation}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchBarContainer}
            onPress={this.toggleExpanded}
          >
            <SearchBar />
          </TouchableOpacity>

          <View style={styles.setPickupContainer}>
            <Button
              title="Set pickup"
              onPress={() => {
                console.warn("clicked set pickup");
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.wheelContainer}
            onPress={() => {
              console.warn("clicked wheel");
            }}
          >
            <Image source={images.wheel} style={styles.wheel} />
          </TouchableOpacity>
        </View>
        <View style={styles.collabsibleAncestorContainer}>
          <Collapsible
            collapsed={this.state.collapsed}
            align="bottom"
            style={styles.collapsible}
          >
            {this.renderCollapsibleView()}
          </Collapsible>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
