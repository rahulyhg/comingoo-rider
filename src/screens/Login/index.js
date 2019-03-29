import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});