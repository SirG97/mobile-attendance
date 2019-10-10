import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

//import logoimg from '../img/icon.png';


export default class Historyscreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header  
          placement='left'
          leftComponent={{ icon: 'history',paddingBottom:40, fontWeight:'bold',fontSize:20 }}
          centerComponent={{ text: 'History', style:{paddingBottom:35, fontWeight:'bold',fontSize:20}}}
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
            height: 60,
            marginBottom: 20,
            elevation: 3,
            shadowRadius:5,
            shadowOpacity:1.0,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
        </Header>
        <View>
          <Text style={styles.appName}>History</Text>
          <Text style={styles.tagline}>Another screen to make sure that things are working the way we expect it to.</Text>
        </View>

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
    backgroundColor: '#EFF2F7'
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

