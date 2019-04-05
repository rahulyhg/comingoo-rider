import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { icons } from '../../utils';
import styles from './styles';


export default class Main extends Component {

    static navigationOptions = ({ ...props }) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} >
                <Image style={styles.drawerMenuStyle} source={icons.drawer_menu} />
            </TouchableOpacity>

        }
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Main Screen
                </Text>
            </View>
        )
    }
}