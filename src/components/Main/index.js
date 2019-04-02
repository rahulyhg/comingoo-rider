import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { icons } from '../../utils';
import styles from './styles';


export default class Main extends Component {

    static navigationOptions = ({ ...props }) => {
        return {
            title: "FCKK",
            headerLeft: <Button title="menu" onPress={() => props.navigation.toggleDrawer()} />
        }
    }


    render() {
        return (
            <View>
                <Text>
                    HEYYY I am Main Component
                </Text>
            </View>
        )
    }
}