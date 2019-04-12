import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class PickupPin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { estimatedArrivalOfClosestDriver } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.circle} />
          {estimatedArrivalOfClosestDriver && (
            <Text style={styles.durationText}>
              {`${estimatedArrivalOfClosestDriver.toFixed()} min `}
            </Text>
          )}
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}
