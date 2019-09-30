import React, { Component } from 'react';
import { StyleSheet,Image, View, Text,Dimensions,TouchableOpacity } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import logoimg from '../img/icon.png';

const {width: WIDTH} = Dimensions.get('window');

export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style = {styles.logoContainer}>
          <Image source={logoimg} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.appName}>Attendance</Text>
          <Text style={styles.tagline}>Welcome to attendance, click on the button below to set up your phone for attendance marking. It only takes a minute.</Text>
        </View>
          {/* <Button
          title="Setup"
          onPress={() => this.props.navigation.navigate('Setup')}/> */}
          <TouchableOpacity style={styles.setupBtn}
           onPress={() => this.props.navigation.navigate('Setup')}
          >
            <Text style={styles.setupText}>Let's go!</Text>
          </TouchableOpacity>
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
  logoContainer:{
    alignItems: 'center',
  },
  logo:{
    height: 120,
    width: 120,
  },
  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0, 0.35)',
    color: 'rgba(255,255,255, 0.7)',
    marginHorizontal: 25,

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
  setupBtn:{
    justifyContent: 'center',
    width: WIDTH - 55,
    height: 55,
    borderRadius: 25,
    marginTop: 220,
    alignItems: 'center',
    color: '#4FB3FF',
    backgroundColor: '#4FB3FF'
  },
  setupText:{
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  }
});

