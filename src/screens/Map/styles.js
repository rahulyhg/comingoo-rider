import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
    // flex: 1
  }
});
