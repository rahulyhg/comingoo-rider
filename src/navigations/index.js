
import {createAppContainer,createStackNavigator} from 'react-navigation';
import login from '../screens/Login';
import signUp from '../screens/Signup';
import HomeScreen from '../screens/Home';
import loginPhoneNumber from '../screens/Login/PhoneNumber'
import loginOtp from '../screens/Login/OtpVerification'

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions:{
          header:null
      }
    },
    Login: {
        screen: login
      },
      LoginPhoneNumber:{
        screen: loginPhoneNumber
      },
      LoginOtp:{
        screen: loginOtp
      },
      Signup: {
      screen: signUp
    }
  },{
      initialRouteName:'Home'
  });
  
  export default createAppContainer(AppNavigator);
  