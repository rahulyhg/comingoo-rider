import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#225eac",
    borderRadius: 8,
    height: height / 13.34,
    justifyContent: "center"
  },
  text: { color: "#fff", textAlign: "center", fontSize: width / 19.7 }
});
