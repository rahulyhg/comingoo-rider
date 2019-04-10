import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { Item, Label, Input } from "native-base";
import { icons } from "../../../utils";
import styles from "./styles";
import { handlers } from "../../../helpers";
import { connect } from "react-redux";
import firebase from "react-native-firebase";

import { strings } from "../../../../locale/i18n";

const { width, height } = Dimensions.get("window");

export default class OtpVerification extends React.Component {
  static navigationOptions = {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#3472b8",
      elevation: 0,
      shadowOpacity: 0
    }
  };

  constructor() {
    super();
    this.state = {
      otp: ""
    };
  }

  verifyOtp = () => {
    const { otp } = this.state;
    const confirmResult = this.props.navigation.getParam("confirmResult");
    if (!otp) {
      this.setState({
        numberError: !otp
      });
      return handlers.showToast(strings("signup.enter_otp_toast"), "danger");
    }

    confirmResult
      .confirm(otp)
      .then(user => {
        console.log(user);
        this.props.navigation.navigate("MainPage");
        return handlers.showToast(strings("signup.code_confirmed"));
      })
      .catch(error => {
        return handlers.showToast(error, "danger");
      });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.signInText}>Sign in</Text>
            <Text style={styles.smsText}>
              A Verification Code has Been sent to your phone number,please
              enter it below to continue
            </Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.middleInnerContainerInputWidth}>
              <Label style={styles.middleInnerContainerLabelColor}>OTP</Label>
              <Item>
                <Input
                  style={styles.middleContainerInputOnChangeColor}
                  onChangeText={text => this.setState({ otp: text })}
                  value={this.state.otp}
                  secureTextEntry
                />
              </Item>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.bottomContainerCircleDesign}
              onPress={this.verifyOtp}
            >
              <Image
                style={styles.bottomContainerArrowImage}
                source={icons.right_arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
