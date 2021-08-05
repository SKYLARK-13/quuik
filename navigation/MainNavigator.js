import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home/Home';
import AuthLogin from '../screens/Auth/AuthLogin';
import AuthSignup from '../screens/Auth/AuthSignup';

const MainNavigator = createStackNavigator(
  {
    AuthLogin: {
      screen: AuthLogin,
    },
    AuthSignup: {
      screen: AuthSignup,
    },
    Home: {
      screen: Home,
    },
  },
  {
headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  },
   
);
export default createAppContainer(MainNavigator);
