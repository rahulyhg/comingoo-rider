import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Drawer extends Component {
    render() {
        return (
            <View>
                <Button title="Help" onPress={() => this.props.navigation.navigate("DrawerHelp")} />
            </View>
        )
    }
}