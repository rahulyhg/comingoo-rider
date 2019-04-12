import React, { Component } from "react";
import { YellowBox } from "react-native";

import Index from "./src/screens";

YellowBox.ignoreWarnings(["Require cycle:"]);

export default class App extends Component {
  render() {
    return <Index />;
  }
}
