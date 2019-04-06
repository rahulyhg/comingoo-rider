import React, { Component } from "react";
import { View, Text, Modal, Alert } from "react-native";
import Dialog, {
  DialogContent,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";

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
          <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </View>
        </DialogContent>
      </Dialog>
    );
  }
}
