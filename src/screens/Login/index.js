import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";
import { loginWithFacebook } from "../../config/facebook";
import { strings } from "../../../locale/i18n";

class Login extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });
  phoneNumberScreen = () => {
    this.props.navigation.navigate("LoginPhoneNumber");
  };

  facebookAuthentication = async () => {
    try {
      const user = await loginWithFacebook();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  buttons = () => (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={this.facebookAuthentication}
      >
        <Image
          source={icons.fb_icon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <View style={styles.seperator} />
        <Text style={styles.btnTxt}>
          {strings("login.login_with_facebook")}
        </Text>
      </TouchableOpacity>
      <Text> </Text>

      <TouchableOpacity style={styles.btn} onPress={this.phoneNumberScreen}>
        <Image
          source={icons.fb_icon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <View style={styles.seperator} />
        <Text style={styles.btnTxt}>
          {strings("login.login_with_phone_number")}
        </Text>
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.mediumTxt}>{strings("home.sign_in")}</Text>
          <Text style={styles.smallTxt}>
            {strings("login.sign_in_with_facebook_or_phone_number")}
          </Text>
        </View>
        <View style={styles.middleContainer}>{this.buttons()}</View>
      </View>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
