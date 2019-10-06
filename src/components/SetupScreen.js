import React, { Component } from 'react';
import { StyleSheet,
         Image, 
         View, 
         Text,
         Dimensions,
         TextInput,
         TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import logoimg from '../img/icon.png';

const {width: WIDTH} = Dimensions.get('window');

export default class SetupScreen extends Component {
  constructor(props){
    super(props);
    this.pressed = false;
    this.state = {
      Name: '',
      Regno: '',
      Department: '',
      Email: ''
    }
  }

  userSetup = () => {
    if(!this.pressed){
      const {Name} = this.state;
      const {Regno} = this.state;
      const {Department} = this.state;
      const {Email} = this.state;
      const url = 'https://fyapi.herokuapp.com/index.php';
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'Application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: Name,
          regno: Regno,
          department: Department,
          email: Email
        })
      }).then((response) =>{
          response.json()
        }).then((response)=>{
            alert('Successful registration');
            this.setupTokenAndNavigateToApp();

        }).catch((error)=>{
          alert('Registration failed');
          console.error(error);
        });
    }

  }

  setupTokenAndNavigateToApp = async () => {
    await AsyncStorage.setItem('userToken', 'sucessful');
    this.props.navigation.navigate('App');
  }
  

    render() {
      return (
        <View style={styles.mainContainer}>
          <View style = {styles.logoContainer}>
          <Image source={logoimg} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.appName}>Attendance</Text>
           <TextInput
            style={styles.input}
            placeholder={'Name'}
            placeholderTextColor={'rgba(225,225,225, 0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={Name => this.setState({Name})}
          /> 
          <TextInput
            style={styles.input}
            placeholder={'Reg number'}
            placeholderTextColor={'rgba(225,225,225, 0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={Regno => this.setState({Regno})}
          /> 
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'rgba(225,225,225, 0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={Email => this.setState({Email})}
          /> 
          <TextInput
            style={styles.input}
            placeholder={'Department'}
            placeholderTextColor={'rgba(225,225,225, 1.0)'}
            underlineColorAndroid='transparent'
            onChangeText={Department => this.setState({Department})}
          />
        </View>
          {/* <Button
          title="Setup"
          onPress={() => this.props.navigation.navigate('Setup')}/> */}
          <TouchableOpacity style={styles.setupBtn}
           onPress={() => this.userSetup()}
          >
            <Text style={styles.setupText}>Submit</Text>
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
      width: WIDTH - 25,
      height: 55,
      borderRadius: 10,
      fontSize: 16,
      paddingLeft: 35,
      marginBottom: 10,
      backgroundColor: 'rgba(225,225,225, 0.5)',
      color: 'rgba(225,0,0, 1)',
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
      width: WIDTH - 25,
      height: 55,
      borderRadius: 25,
      marginTop: 55,
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