/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/components/HomeScreen';
import SetupScreen from './src/components/SetupScreen';




export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Setup: {
    screen: SetupScreen,
    navigationOptions: {
      header: null,
    }
  },
    initialRouteName: "HomeScreen"

});

const AppContainer = createAppContainer(AppNavigator);
