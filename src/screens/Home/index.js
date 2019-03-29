import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  Button
} from 'react-native';


export default class Home extends Component {
  render() {
    return (
      <View  style={styles.container}>
        <Button
          title="Login"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   
  }
});