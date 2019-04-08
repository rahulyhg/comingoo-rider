import React, { Component } from "react";
import { View, findNodeHandle } from "react-native";
import { Provider } from "react-redux";
import { Root } from "native-base";

import { BlurView, VibrancyView } from "react-native-blur";

import { permissions } from "../helpers";

import { store } from "../store";
import AppNavigator from "../navigations/index";
import { handlers } from "../helpers";
import { Popup } from "../components";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBlur: false // We can control with redux.
      // For popup we can create functions like showPopup(title,descriptiion etc). and we can return different popup according to props.
      // When popup close, we can set isBlur as false with redux.
    };
  }

  componentDidMount = async () => {
    const hasPermissions = await permissions.checkLocationPermission();
    try {
      await permissions.requestLocationPermission();
    } catch (error) {
      handlers.showToast(error.message, "danger");
    }
  };
  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppNavigator />
          {this.state.isBlur && (
            <BlurView
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
              blurType="light"
              blurAmount={3}
            />
          )}
          {this.state.isBlur && (
            <Popup
              title="Voulez-vous vraiment annuler la course?"
              description="Des frais supplementaires peuvent etra appliques"
              buttonOneText="Non, je ne veux pas annuler"
              buttonTwoText="Oui, jen suis sur"
              buttonOneOnPress={() => {
                this.setState({ isBlur: false });
              }}
              buttonTwoOnPress={() => {
                this.setState({ isBlur: false });
              }}
            />
          )}
        </Provider>
      </Root>
    );
  }
}
