import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/Signup";
import HomeScreen from "../screens/Home";
import MapScreen from "../screens/Map";

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
    Map: { screen: MapScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
