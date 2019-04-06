import React, { Component } from "react";
import { View, Text, Modal, Alert } from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";

import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  render() {
    const { title, description } = this.props;

    return (
      <Dialog
        visible={this.state.visible}
        dialogAnimation={
          new ScaleAnimation({
            initialValue: 0, // optional
            useNativeDriver: true // optional
          })
        }
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
        dialogStyle={styles.popupContainer}
      >
        <DialogContent>
          <LinearGradient
            locations={[0, 0.3, 0.9]}
            colors={["#4B8FD1", "#2870BE", "#185EB1"]}
            style={styles.popupContainer}
          />
        </DialogContent>
      </Dialog>
    );
  }
}
