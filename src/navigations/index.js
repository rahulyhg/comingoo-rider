import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/Signup";
import HomeScreen from "../screens/Home";
import MapScreen from "../screens/Map";
import loginPhoneNumber from '../screens/Login/PhoneNumber'
import loginOtp from '../screens/Login/OtpVerification'
import MainPage from '../components/Main'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: { screen: LoginScreen },
    Signup: { screen: SignUpScreen },
    Map: { screen: MapScreen },
    LoginPhoneNumber: {
      screen: loginPhoneNumber
    },
    Main:{
      screen: MainPage
    },
    LoginOtp: {
      screen: loginOtp
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
