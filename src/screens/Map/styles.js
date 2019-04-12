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
    zIndex: 1
  },
  searchBarContainer: {
    width: width,
    height: height / 13.34,
    marginTop: height / 33.35,
    paddingRight: width / 22.33,
    paddingLeft: width / 22.33
  },
  currentLocationIcon: {
    width: 40,
    height: 40
  },
  currentLocationIconContainer: {
    width: 40,
    height: 40,
    marginRight: width / 22.33,
    alignSelf: "flex-end"
  },
  setPickupContainer: {
    width: width,
    height: height / 13.34,
    marginTop: 14,
    paddingRight: width / 22.33,
    paddingLeft: width / 22.33
  },

  wheelContainer: {
    width: 80,
    height: 80,
    marginTop: 14,
    alignSelf: "center"
  },
  wheelIcon: { width: 80, height: 80 },

  collabsibleAncestorContainer: {
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 10,
    zIndex: 2
  },
  collapsible: {
    backgroundColor: "#F2F2F2",
    height: height / 1.21,
    borderRadius: 10
  },
  cancelIcon: {
    width: 17,
    height: 17,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10
  },
  collapsibleSearchBar: {
    backgroundColor: "#F2F2F2",
    width: width - 45
  },
  listTitleText: {
    color: "#2D3457",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 7
  },
  showMoreText: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#2D3457",
    fontWeight: "600"
  },
  listsContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
  },
  fileHomeIcon: { width: 16, height: 13, marginRight: 10 },
  listItemTitle: {
    color: "#2D3457",
    fontWeight: "600",
    fontSize: 15
  },
  lisItemDescription: {
    color: "#B3B3B3",
    fontWeight: "600",
    fontSize: 13,
    marginTop: 2
  },
  addIconContainer: {
    position: "absolute",
    right: 5
  },
  addIcon: {
    width: 16,
    height: 13
  },
  eachListContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
  },
  locationIcon: { width: 13, height: 18, marginRight: 10 },
  recentIcon: { width: 17.2, height: 16, marginRight: 10 },

  drawerMenuStyle: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
});
