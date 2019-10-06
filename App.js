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
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


import WelcomeScreen from './src/components/WelcomeScreen';
import SetupScreen from './src/components/SetupScreen';
import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import HomeScreen from './src/components/HomeScreen';
import AttendanceScreen from './src/components/AttendanceScreen';
import ListsScreen from './src/components/ListsScreen';
import HistoryScreen from './src/components/HistoryScreen';




export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const SetupNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
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
    initialRouteName: "WelcomeScreen"

});

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: { 
      screen: HomeScreen, 
      navigationOptions: {
        title: 'Home',
        tabBarIcon:({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Attendance: { 
      screen: AttendanceScreen, 
      navigationOptions: {
        title: 'Attendance',
        tabBarIcon:({ tintColor }) => (
          <Icon name="verified-user" size={25} color={tintColor} />
        )
      } 
    },
    Lists: {screen: ListsScreen,
      navigationOptions: {
        title: 'List',
        tabBarIcon:({ tintColor }) => (
          <Icon name="view-list" size={25} color={tintColor} />
        )
      } 
    },
 
    History: { screen: HistoryScreen,
      navigationOptions: {
        title: 'History',
        tabBarIcon:({ tintColor }) => (
          <Icon name="history" size={25} color={tintColor} />
        )
      }  
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#4FB3FF' },
  
  });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen, 
    App: AppNavigator,
    Setup: SetupNavigator
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
