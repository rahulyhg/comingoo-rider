import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    iconStyle: {
        width: "14%",
        height: "80%",
        backgroundColor: colors.bluePrimary,
    }
});
