import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import { Item, Label, Input } from "native-base";
import { icons } from "../../../utils";
import styles from './styles';
import { handlers } from '../../../helpers';

export default class OtpVerification extends React.Component {

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
            otp: ""
        }
    }

    verifyOtp=()=>{
        const { otp } = this.state;
        if (!otp) {
          this.setState({
            numberError: !otp
          });
          return handlers.showToast("veuillez entrer d'abord OTP", "danger");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.signInText}>Sign in</Text>
                    <Text style={styles.smsText}>A Verification Code has Been sent to your phone number,please enter it below to continue</Text>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.middleInnerContainerInputWidth}>
                        <Label style={styles.middleInnerContainerLabelColor}>OTP</Label>
                        <Item>
                            <Input
                                style={styles.middleContainerInputOnChangeColor}
                                onChangeText={text => this.setState({ otp: text })}
                                value={this.state.otp}
                                secureTextEntry={true}
                            />

                        </Item>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.bottomContainerCircleDesign} onPress={this.verifyOtp}>
                        <Image style={styles.bottomContainerArrowImage} source={icons.right_arrow} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
