import React, { Component } from "react";
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Platform,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Collapsible from "react-native-collapsible";

import { SearchBar, Button, PickupPin } from "../../components/";

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
      coordinates: [],
      inputCoordinate: null,
      userCoordinate: null,
      watchId: "",
      collapsed: true,
      draggable: true,
      region: null,
      showsUserLocation: true,
      followsUserLocation: true,
      closestDriveLocation: null,
      estimatedArrivalOfClosestDriver: null,
      addLocationMarker: false,
      loading: true,
      exampleFavoritePlacesData: [
        {
          title: "Work",
          description: "Cafe le visar",
          id: "asdasd"
        },
        {
          title: "Home",
          description: "Residence andalusia",
          id: "asdas1231d"
        }
      ],
      exampleRecentPlacesData: [
        {
          title: "Boulevard de l'Atlantide",
          description: "Casablanca",
          id: "123123lasldöösald"
        },
        {
          title: "Mc Donald's",
          description: "Mc Donald's - - Casablanca",
          id: "lödlaödlaösdlöawdl13123"
        },
        {
          title: "Boulevard de l'Atlantide",
          description: "Casablanca",
          id: "kasmdkasmdkmaskdmlaö"
        },
        {
          title: "Mc Donald's",
          description: "Mc Donald's - - Casablanca",
          id: "alsmdlakqnwrkqwrkmn"
        }
      ]
    };
    this.mapView = null;
  }

  componentDidMount = async () => {
    const { geolocation } = navigator;
    await geolocation.watchPosition(location => {
      this.setState({
        userCoordinate: location.coords
      });
    });

    //check closest driver location and add coordinates

    const { coordinates } = this.state;

    const closestDriveLocation = {
      latitude: 37.78543515272996,
      longitude: -122.40533988922834
    };

    await geolocation.getCurrentPosition(position => {
      coordinates.push(closestDriveLocation);
      coordinates.push(position.coords);

      console.warn(position);

      this.setState({
        userCoordinate: position.coords,
        coordinates,
        loading: false
      });
    });
  };

  onMapPress = e => {
    /*  this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate]
    }); */

    console.log(e.nativeEvent.coordinate);
  };

  getCurrentLocationOfRider = async () => {
    await navigator.geolocation.getCurrentPosition(position => {
      this.setState({ userCoordinate: position.coords });
      const oldCoordinatesList = this.state.coordinates;
      oldCoordinatesList.push(position.coords);
      this.setState({ coordinates: oldCoordinatesList });

      this.goToCurrentLocation();
    });
  };

  goToCurrentLocation = () => {
    const { userCoordinate, region } = this.state;
    this.mapView.animateToRegion({
      latitude: userCoordinate.latitude,
      longitude: userCoordinate.longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta
    });
  };

  /* setUserLocation = event => {
    const userCoordinate = event.nativeEvent.coordinate;
    this.setState({ userCoordinate });
    if (
      this.state.followsUserLocation &&
      this.state.userCoordinate.latitude &&
      this.state.userCoordinate.longitude
    ) {
      this.goToCurrentLocation();
    }
  }; */

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
          <SearchBar canInput />
        </View>
        <ScrollView
          contentContainerStyle={{
            marginTop: 7,
            padding: 20
          }}
          showsVerticalScrollIndicator={false}
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
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        collapsed: true,
                        addLocationMarker: true
                      });
                    }}
                    style={styles.addIconContainer}
                  >
                    <Image source={icons.add_icon} style={styles.addIcon} />
                  </TouchableOpacity>
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
                      style={styles.recentIcon}
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
    if (this.state.loading) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center"
            }}
            size="large"
            color="#000"
          />
        </View>
      );
    }
    return (
      <View style={styles.mainContainer}>
        <MapView
          initialRegion={{
            longitude: LONGITUDE,
            latitude: LATITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          // onUserLocationChange={this.setUserLocation}
          onRegionChangeComplete={region => {
            this.setState({ region });
            // sthis.getCurrentLocationOfRider();
          }}
          ref={ref => (this.mapView = ref)}
          showsUserLocation={this.state.showsUserLocation}
          followsUserLocation={this.state.followsUserLocation}
          style={styles.map}
          onPress={this.onMapPress}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          showsUserLocation
          // onMapReady={() => this.getCurrentLocationOfRider()}
        >
          {/* this.state.coordinates.map((coordinate, index) => (
            <MapView.Marker
              key={`coordinate_${index}`}
              coordinate={coordinate}
            />
          )) */}
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
              strokeWidth={0}
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
                /* this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20
                  }
                }); */
                this.setState({
                  estimatedArrivalOfClosestDriver: result.duration
                });
              }}
              onError={errorMessage => {
                console.log("GOT AN ERROR", errorMessage);
              }}
            />
          )}
          <MapView.Marker coordinate={this.state.coordinates[0]}>
            <PickupPin
              estimatedArrivalOfClosestDriver={
                this.state.estimatedArrivalOfClosestDriver
              }
            />
          </MapView.Marker>
          {this.state.addLocationMarker && (
            <MapView.Marker
              coordinate={this.state.userCoordinate}
              draggable
              onDragEnd={e => console.warn(e.nativeEvent.coordinate)}
            />
          )}
        </MapView>
        <View style={styles.actionsView}>
          <TouchableOpacity
            onPress={this.getCurrentLocationOfRider}
            style={styles.currentLocationIconContainer}
          >
            <Image
              source={icons.current_location}
              style={styles.currentLocationIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchBarContainer}
            onPress={this.toggleExpanded}
          >
            <SearchBar canInput={false} />
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
            <Image source={images.wheel} style={styles.wheelIcon} />
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
