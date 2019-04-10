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
    const { width } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>∙ </Text>
          <TextInput
            placeholder="Cafe Visar"
            placeholderTextColor="#020B39"
            style={styles.inputText}
          />
        </View>
        <View style={styles.iconsContainer}>
          <Image source={icons.search} style={styles.searchIcon} />
          <Text style={styles.seperater}> | </Text>
          <Image
            source={icons.car_time}
            style={styles.carTimeIcon}}
          />
        </View>
      </View>
    );
  }
}
