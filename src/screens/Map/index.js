import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./styles";
import { handlers } from "../../helpers";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: null,
      watchId: ""
    };
  }

  componentDidMount = async () => {
    const geo = navigator.geolocation;
    await geo.watchPosition(location => {
      this.setState({
        coords: location.coords
      });
    });
  };

  render() {
    const { coords } = this.state;
    return !coords ? (
      handlers.loader()
    ) : (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
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
