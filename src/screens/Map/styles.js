import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  mainContainer: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  actionsView: {
    position: "absolute",
    bottom: 60,
    alignItems: "flex-end"
  },
  searchBarContainer: {
    width: width,
    height: height / 13.34,
    marginTop: height / 33.35,
    paddingRight: width / 22.33,
    paddingLeft: width / 22.33
  },
  currentLocation: { width: 40, height: 40, marginRight: width / 22.33 },
  setPickupContainer: {
    width: width,
    height: height / 13.34,
    marginTop: 14,
    paddingRight: width / 22.33,
    paddingLeft: width / 22.33
  },
  wheelContainer: {
    width: width,
    height: height / 13.34,
    marginTop: 14,
    paddingRight: width / 22.33,
    paddingLeft: width / 22.33,
    alignItems: "center"
  },
  wheel: { width: 80, height: 80 },
  collabsibleAncestorContainer: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    left: 10,
    right: 10
  },
  collapsible: {
    backgroundColor: "#F2F2F2",
    width: width,
    height: height / 1.21,
    padding: 10
  },
  cancelIcon: {
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    marginRight: 30,
    marginBottom: 10
  },
  collapsibleSearchBar: {
    backgroundColor: "#F2F2F2",
    width: width - 45
  }
});
