import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
