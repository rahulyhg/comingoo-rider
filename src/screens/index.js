import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";

import { permissions } from "../helpers";

import { store } from "../store";
import AppNavigator from "../navigations/index";
import { handlers } from "../helpers";
import { Popup } from "../components";

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
          <Popup title="Title" description="Description" />
        </Provider>
      </Root>
    );
  }
}
