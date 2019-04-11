import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  inputText: { fontSize: 17 },
  iconsContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 15,
    alignItems: "center"
  },
  searchIcon: { width: 21, height: 21 },
  seperater: { fontSize: 24.5 },
  carTimeIcon: { width: 22, height: 22 }
});
