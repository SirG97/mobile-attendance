import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Header } from 'react-native-elements';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

//import logoimg from '../img/icon.png';


export default class Homescreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header  
          placement='left'
          leftComponent={{ icon: 'home',paddingBottom:40, fontWeight:'bold',fontSize:20 }}
          centerComponent={{ text: 'Home', style:{paddingBottom:35, fontWeight:'bold',fontSize:20}}}
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
        <View style={styles.infoBox}>
          <View style={styles.infoBoxIcon}>
            <Icon
              name='verified-user'
              type='material'
              color='white'
              size ={75}
              containerStyle={{backgroundColor: '#4FB3FF',borderRadius: 5,paddingTop: 10,paddingBottom: 10,borderTopRightRadius:0,borderBottomRightRadius:0}}
            />
          </View>
          <View style={styles.infoBoxText}>
            <Text style={styles.appName}>0</Text>
            <Text style={styles.tagline}>Attendance taken.</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoBoxIcon}>
          <Icon
            name='assignment-turned-in'
            type='material'
            color='white'
            size ={75}
            containerStyle={{backgroundColor: '#28a745',borderRadius: 5,paddingTop: 10,paddingBottom: 10,borderTopRightRadius:0,borderBottomRightRadius:0}}
          />
          </View>
          <View style={styles.infoBoxText}>
            <Text style={styles.appName}>41</Text>
            <Text style={styles.tagline}>Attendance marked.</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoBoxIcon}>
            <Icon
              name='highlight-off'
              type='material'
              color='white'
              size ={75}
              containerStyle={{backgroundColor: '#dc3545',borderRadius: 5, paddingTop: 10,paddingBottom: 10,borderTopRightRadius:0,borderBottomRightRadius:0}}

            />
          </View>
          <View style={styles.infoBoxText}>
            <Text style={styles.appName}>7</Text>
            <Text style={styles.tagline}>Attendance missed.</Text>
          </View>
        </View>
          {/* <Button
          title="Setup"
          onPress={() => this.props.navigation.navigate('Setup')}/> */}
            <Icon
            name='fingerprint'
            type='material'
            color='blue'
            size ={30}
            reverse={true}
            raised={true}
            reverseColor='#4FB3FF'
            color='white'
            containerStyle={{borderRadius: 5,padding: 7, alignSelf:'flex-end', marginTop:40}}
          />

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
    fontSize: 42,
    fontFamily: ''
  },
  infoBox:{
    borderRadius: 3,
    shadowColor: '0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2)',
    backgroundColor: 'white',
    minHeight: 50,
    padding: 5,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: 330,
    marginBottom: 20
  },
  infoBoxIcon:{
    alignSelf:'center',
    paddingTop: 1,
    paddingBottom: 1,
    width:100,
  },
  infoBoxText:{
    padding: 5,
    paddingBottom: 10,
    backgroundColor: 'rgba(203, 207, 210, 0.18)',
    marginLeft: 5,
    borderRadius: 5,
    width: 215,
    borderBottomStartRadius:0,
    borderTopLeftRadius:0
  },
  tagline:{
    fontSize: 17,
    fontWeight: '500'
  },
  setupText:{
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  }
});

