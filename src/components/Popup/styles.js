import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

import { colors } from "../../constants";

export default StyleSheet.create({
  popupContainer: {
    width: width / 1.03,
    height: height/ 3.335,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height / 66.7,
    paddingTop: height / 26.68,
    paddingHorizontal: width / 37.5
  },
  title: {
    color: "#fff",
    fontSize: width / 22.05,
    fontWeight: "600",
    flex: 1
  },
  description: {
    color: "#fff",
    fontSize: width / 28.84,
    fontWeight: "200",
    marginTop: height / 66.7,
    flex: 1.5,
    textAlign: "center"
  },
  buttonsContainer: { flexDirection: "row", flex: 1 },
  buttonOneContainer: {
    backgroundColor: "#fff",
    padding: width / 37.5,
    borderRadius: 6
  },
  buttonOneText: {
    fontSize: width / 25,
    color: "#2870BE",
    fontWeight: "700"
  },
  buttonTwoText: { fontSize: width / 25, color: "#fff", padding: width / 37.5 }
});
