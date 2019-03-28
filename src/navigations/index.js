import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {withNavigation} from 'react-navigation'


class navigations extends Component {

    LoginNavigation = () => {
        this.props.navigation.navigate("signUp");
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={this.LoginNavigation}></Button>
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

export default withNavigation(navigations);


