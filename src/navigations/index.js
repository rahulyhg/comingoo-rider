
import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MapScreen from "../screens/Map";
import login from '../screens/Login';
import signUp from '../screens/Signup';
import HomeScreen from '../screens/Home';
import loginPhoneNumber from '../screens/Login/PhoneNumber'
import loginOtp from '../screens/Login/OtpVerification'
import Drawer from './Drawer';
import Main from '../components/Main';
import DrawerHome from '../screens/DrawerScreens/Home';
import DrawerHistory from '../screens/DrawerScreens/History'
import DrawerNotifications from '../screens/DrawerScreens/Notifications'
import DrawerReferAFriend from '../screens/DrawerScreens/ReferAFriend'
import DrawerComingooAndYou from '../screens/DrawerScreens/ComingooAndYou'
import DrawerHelp from '../screens/DrawerScreens/Help'

const deviceWidth = Dimensions.get("window").width;

const StackTab = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: login
  },
  Map: { screen: MapScreen },
  LoginPhoneNumber: {
    screen: loginPhoneNumber
  },
  LoginOtp: {
    screen: loginOtp
  },
  Signup: {
    screen: signUp
  },
  MainPage: {
    screen: Main
  },
  DrawerHome: {
    screen: DrawerHome
  },
  DrawerHistory: {
    screen: DrawerHistory
  },
  DrawerNotifications: {
    screen: DrawerNotifications
  },
  DrawerReferAFriend: {
    screen: DrawerReferAFriend
  },
  DrawerComingooAndYou: {
    screen: DrawerComingooAndYou
  },
  DrawerHelp: {
    screen: DrawerHelp
  },
}, {
    initialRouteName: 'Home'
  });


const AppNavigator = createDrawerNavigator({
  Tabs: StackTab
}, {
    drawerWidth: deviceWidth/1.4,
    contentComponent: props => <Drawer {...props} />,
  });


export default createAppContainer(AppNavigator);
