import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

//import logoimg from '../img/icon.png';


export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.appName}>List</Text>
          <Text style={styles.tagline}>Another screen to make sure that things are working the way we expect it to.</Text>
        </View>
          {/* <Button
          title="Setup"
          onPress={() => this.props.navigation.navigate('Setup')}/> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    width: null,
    height: null,
    alignItems: 'center',
    paddingTop: 120,
    backgroundColor: '#ffffff'
  },
  appName:{
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: ''
  },
  tagline:{
    textAlign: 'center',
    padding: 15,
    fontSize: 17,
    fontWeight: '500'
  },
  setupText:{
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  }
});

