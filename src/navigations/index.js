
import {createAppContainer,createStackNavigator} from 'react-navigation';
import login from '../screens/Login';
import signUp from '../screens/Signup';
import HomeScreen from '../screens/Home';

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
      Signup: {
      screen: signUp
    }
  },{
      initialRouteName:'Home'
  });
  
  export default createAppContainer(AppNavigator);
  