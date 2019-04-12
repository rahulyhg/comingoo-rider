import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  circle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#020B39"
  },
  durationText: {
    position: "absolute",
    color: "#fff",
    fontSize: width / 31.25,
    textAlign: "center",
    padding: 5
  },
  line: { width: 1.5, height: 26, backgroundColor: "black" }
});
