import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import styles from "./styles";
import { handlers } from "../../helpers";
import mapStyle from "./mapStyle.json";

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
      watchId: ""
    };
    this.mapView = null;
  }

  onMapPress = e => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate]
    });
  };

  componentDidMount = async () => {
    const geo = navigator.geolocation;
    await geo.watchPosition(location => {
      this.setState({
        coords: location.coords
      });
    });
  };

  render() {
    return (
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
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        ))}
        {this.state.coordinates.length >= 2 && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={
              this.state.coordinates.length > 2 ? this.state.coordinates.slice(1, -1) : null
            }
            destination={this.state.coordinates[this.state.coordinates.length - 1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
            optimizeWaypoints
            onStart={params => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
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
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
