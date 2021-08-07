import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home/Home';
import AuthLogin from '../screens/Auth/AuthLogin';
import AuthSignup from '../screens/Auth/AuthSignup';

// const MainNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//   },

//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerVisible: false,
//     },
//   },
// );

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: AuthLogin,
    },
    Signup: {
      screen: AuthSignup,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: AuthNavigator,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(SwitchNavigator);
