import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";

import { permissions, handlers } from "../helpers";

import { store } from "../store";
import AppNavigator from "../navigations/index";

export default class index extends Component {
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
        </Provider>
      </Root>
    );
  }
}
