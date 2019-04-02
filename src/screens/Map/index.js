import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./styles";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: 24.9051184,
            longitude: 67.0774386,
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
