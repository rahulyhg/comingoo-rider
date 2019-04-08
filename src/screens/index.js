import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";

import BlurOverlay, {
  closeOverlay,
  openOverlay
} from "react-native-blur-overlay";

import { permissions } from "../helpers";

import { store } from "../store";
import AppNavigator from "../navigations/index";
import { handlers } from "../helpers";
import { Popup } from "../components";

export default class index extends Component {
  componentDidMount = async () => {
    openOverlay(); // This makes the screen blur and open the popup.

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
          {/* <BlurOverlay
            radius={14}
            downsampling={2}
            brightness={-200}
            onPress={() => {
              closeOverlay();
            }}
            customStyles={{ alignItems: "center", justifyContent: "center" }}
            blurStyle="light"
            children={
              <Popup
                title="Voulez-vous vraiment annuler la course?"
                description="Des frais supplementaires peuvent etra appliques"
                buttonOneText="Non, je ne veux pas annuler"
                buttonTwoText="Oui, jen suis sur"
                buttonOneOnPress={() => console.warn("clicked button one")}
                buttonTwoOnPress={() => console.warn("clicked button two")}
              />
            }
          /> */}
        </Provider>
      </Root>
    );
  }
}
