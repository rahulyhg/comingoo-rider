import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';



export default class SignUp extends Component {

    SignUpNavigation = () => {
        this.props.navigation.navigate("Home");
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="SignUp" onPress={this.SignUpNavigation}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
