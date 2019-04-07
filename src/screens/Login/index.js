import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { onLogin } from "../../store/auth/actions";
import { strings } from "../../../locale/i18n";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  login = () => {
    // const { onLogin } = this.props;
    // onLogin();
    this.navigate("Map");
  };

  navigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{strings("login.login_heading")}</Text>
        <Button title={strings("login.login_button")} onPress={this.login} />
        <Button
          title={strings("login.sign_up")}
          onPress={() => this.props.navigation.navigate("Signup")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(onLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
