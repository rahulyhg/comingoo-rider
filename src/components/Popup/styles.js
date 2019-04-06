import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

import { colors } from "../../constants";

export default StyleSheet.create({
  popupContainer: {
    width: width - 30,
    height: 150,
    borderRadius: 10
  }
});
