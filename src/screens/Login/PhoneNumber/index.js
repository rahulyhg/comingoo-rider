import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import { Item, Label, Input } from "native-base";
import { icons } from "../../../utils";
import styles from './styles';
import {handlers} from '../../../helpers'

export default class PhoneNumber extends React.Component {

    static navigationOptions = {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#3472b8',
            elevation: 0,
            shadowOpacity: 0
        },

    };


    constructor() {
        super();
        this.state = {
            number: "",
            numberError: false,
        }
    }

    navigateToOtpScreen = () => {
        const { number } = this.state;
        if (!number) {
            this.setState({
                numberError: !number
            });
            return handlers.showToast(
                "S'il vous plait, entrez votre numéro de téléphone!",
                "danger"
            );
        }
        this.props.navigation.navigate("LoginOtp");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.signInText}>Sign in</Text>
                    <Text style={styles.smsText}>Enter your phone number</Text>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.middleInnerContainerInputWidth}>
                        <Label style={styles.middleInnerContainerLabelColor}>Phone Number</Label>
                        <Item>
                            <Input
                                style={styles.middleContainerInputOnChangeColor}
                                keyboardType="phone-pad"
                                onChangeText={number => this.setState({ number: number })}
                                value={this.state.number}
                            />

                        </Item>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.bottomContainerCircleDesign} onPress={this.navigateToOtpScreen}>
                        <Image style={styles.bottomContainerArrowImage} source={icons.right_arrow} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
