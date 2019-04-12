import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import { Item, Label, Input } from "native-base";

import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";

import { icons } from "../../../utils";
import styles from "./styles";
import { handlers } from "../../../helpers";
import { strings } from "../../../../locale/i18n";

const { width, height } = Dimensions.get("window");

export default class PhoneNumber extends React.Component {
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
      number: "",
      numberError: false,
      confirmResult: null,
      cca2: "US"
    };
  }

  navigateToOtpScreen = () => {
    const { number } = this.state;
    if (!number) {
      this.setState({
        numberError: !number
      });
      return handlers.showToast(strings("signup.enter_phone_toast"), "danger");
    }

    firebase
      .auth()
      .signInWithPhoneNumber(number)
      .then(confirmResult => {
        this.setState({ confirmResult: confirmResult });
        this.props.navigation.navigate("LoginOtp", {
          confirmResult: this.state.confirmResult,
          number:this.state.number
        });
        return handlers.showToast(strings("signup.code_sent_your_phone"));
      })
      .catch(error => console.log(error));
  };

  onPressFlag = () => {
    this.countryPicker.openModal();
  };

  selectCountry = country => {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.signInText}>Sign in</Text>
            <Text style={styles.smsText}>Enter your phone number</Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.middleInnerContainerInputWidth}>
              <Label style={styles.middleInnerContainerLabelColor}>
                Phone Number
              </Label>
              <Item>
                <PhoneInput
                  ref={ref => {
                    this.phone = ref;
                  }}
                  onPressFlag={this.onPressFlag}
                  style={styles.middleContainerInputOnChangeColor}
                  textStyle={styles.phoneNumberText}
                  onChangePhoneNumber={phoneNumberText =>
                    this.setState({ number: phoneNumberText })
                  }
                  value={this.state.number}
                />
                <CountryPicker
                  ref={ref => {
                    this.countryPicker = ref;
                  }}
                  onChange={value => this.selectCountry(value)}
                  translation={strings("signup.phone_number_language")}
                  cca2={this.state.cca2}
                >
                  <View />
                </CountryPicker>
              </Item>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.bottomContainerCircleDesign}
              onPress={this.navigateToOtpScreen}
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
