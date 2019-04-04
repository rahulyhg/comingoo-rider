import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";

import { handlers } from "../../helpers";
import { loginWithFacebook } from "../../config/facebook";

import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";
import firebase from "react-native-firebase";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      numberError: false,
      number: "",
      otp: "",
      confirmResult: null
    };
  }

  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  next = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  login = async () => {
    try {
      const user = await loginWithFacebook();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  sendOTP = () => {
    const { number } = this.state;
    if (!number) {
      this.setState({
        numberError: !number
      });
      return handlers.showToast(
        "S'il vous plait, entrez votre numéro de téléphone!",
        "danger"
      );
    }

    firebase
      .auth()
      .signInWithPhoneNumber(number)
      .then(confirmResult => {
        this.setState({ confirmResult: confirmResult });
        this.next();
        return handlers.showToast("Code sent your phone.");
      })
      .catch(error => console.log(error));
  };

  verifyOTP = () => {
    const { otp, confirmResult } = this.state;
    if (!otp) {
      this.setState({
        numberError: !otp
      });
      return handlers.showToast("veuillez entrer d'abord OTP", "danger");
    }

    confirmResult
      .confirm(otp)
      .then(user => {
        console.log(user);
        // user successfully signup, will navigate to nextpage...
        return handlers.showToast("Code confirmed.");

      })
      .catch(error => {
        return handlers.showToast(error, "danger");
      });
  };

  facebootBtn = () => (
    <TouchableOpacity style={styles.btn} onPress={this.login}>
      <Image
        source={icons.fb_icon}
        style={styles.iconStyle}
        resizeMode="contain"
      />
      <View style={styles.seperator} />
      <Text style={styles.btnTxt}>Continuer aver Facebook</Text>
    </TouchableOpacity>
  );

  numberInput = () => {
    const { number, numberError } = this.state;
    return (
      <View style={styles.numberContainer}>
        <Item stackedLabel style={styles.inputs} error={numberError}>
          <Label style={styles.labelStyle}>Numéro de téléphone</Label>
          <Input
            style={styles.inputStyle}
            keyboardType="phone-pad"
            value={number}
            onChangeText={number => this.setState({ number })}
            error
          />
        </Item>
        <TouchableOpacity style={styles.nextBtn} onPress={this.sendOTP}>
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  otpInput = () => {
    const { otp } = this.state;
    return (
      <View style={styles.numberContainer}>
        <Item stackedLabel style={styles.inputs}>
          <Label style={styles.labelStyle}>OTP</Label>
          <Input
            style={styles.inputStyle}
            keyboardType="number-pad"
            value={otp}
            onChangeText={otp => this.setState({ otp })}
            error
          />
        </Item>
        <TouchableOpacity style={styles.nextBtn} onPress={this.verifyOTP}>
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { step } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.mediumTxt}>Sign up</Text>
          <Text style={styles.smallTxt}>
            {step == 1
              ? "Please sign up with your facebook account to continue"
              : step == 2
              ? "Enter your phone number"
              : "A varification code has been sent to your phone number, please enter it below to continue"}
          </Text>
        </View>
        <View style={styles.middleContainer}>
          {step == 1
            ? this.facebootBtn()
            : step == 2
            ? this.numberInput()
            : this.otpInput()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
