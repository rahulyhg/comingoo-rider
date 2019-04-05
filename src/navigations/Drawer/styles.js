import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/index";

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    backgroundDrawerImage: {
        width: width / 1.21, height: "100%"
    },
    innerContainer: {
        flex: 1
    },
    innerViewContainer: {
        flex: 0.25, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: width * 0.08,
    },
    innerThumbnailAndTextContainer: {
        flexDirection: 'row', justifyContent: 'space-between', width: "73%", alignItems: 'center'
    },
    thumbnailContainer: {
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1000,
    },
    textContainer: { fontSize: 20, color: '#fff' },
    middleContainer: { flex: 0.7, justifyContent: "flex-start", alignItems: 'center', marginTop: 50 },
    mainContainer: { flex: 1, width: "65%" },
    mainContainerImageAndText: { flexDirection: "row", alignItems: 'center' },
    mainContainerStyles: {
        width: "14%",
        height: "80%"
    },
    mainContainerTextStyles: { fontSize: 20, color: '#fff', marginLeft: 10 },
    underline: {
        backgroundColor: "#fff",
        height: 2,
        width: width/1.4
    },
    bottomContainer: { flex: 0.1, justifyContent: 'center', alignItems: "center", },
    bottomInnerContainer: { flexDirection: "row", paddingRight: "30%", width: '65%' },
    bottomImageStyle: {
        width: "24%",
        height: "80%"
    },
    bottomImageTextStyle: { fontSize: 20, color: '#fff', marginLeft: 10 }
});
