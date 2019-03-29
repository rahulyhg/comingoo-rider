import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { images } from "../../utils";
import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Image
            source={images.comingoo_logo}
            style={styles.logoStyles}
            resizeMode="contain"
          />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.middleInnerContainer}>
            <View style={styles.middleTextContainer}>
              <Text style={styles.smallTxt}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                <Text style={styles.mediumTxt}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInnerContainer}>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.accountColor}>Already have an account</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.signInColor}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
