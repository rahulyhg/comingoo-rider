import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { icons } from "../../utils";
import styles from "./styles";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, canInput } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>∙ </Text>
          {canInput ? (
            <TextInput
              placeholder="Cafe Visar"
              placeholderTextColor="#020B39"
              style={styles.inputText}
            />
          ) : (
            <Text style={styles.inputText}>Cafe Visar</Text>
          )}
        </View>
        <View style={styles.iconsContainer}>
          <Image source={icons.search} style={styles.searchIcon} />
          <Text style={styles.seperater}> | </Text>
          <Image source={icons.car_time} style={styles.carTimeIcon} />
        </View>
      </View>
    );
  }
}
