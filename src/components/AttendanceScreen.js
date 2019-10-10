import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimension, Picker } from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropdownMenu from 'react-native-dropdown-menu';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

//import logoimg from '../img/icon.png';
const data = [["C", "Java", "JavaScript", "PHP"]];

export default class Attendancescreen extends Component {
    constructor(props){
        super(props);
        this.pressed = false;
        this.state = {
          Name: '',
          Topic: '',
          List: '',
          
        }
      }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header  
          placement='left'
          leftComponent={{ icon: 'verified-user',paddingBottom:40, fontWeight:'bold',fontSize:20 }}
          centerComponent={{ text: 'Attendance', style:{paddingBottom:35, fontWeight:'bold',fontSize:20}}}
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
        <View style={styles.formContainer}>
         <Text style={styles.formHeader}>Create Attendance</Text>
         <TextInput 
            placeholder='Name'
            style={styles.inputText}
            onChangeText={Name => this.setState({Name})} />
         <TextInput 
            placeholder='Topic'
            style={styles.inputText}
            onChangeText={Topic => this.setState({Topic})} />
            <TextInput 
            placeholder='List'
            style={styles.inputText}
            onChangeText={Topic => this.setState({Topic})} />
            <Picker
              selectedValue={this.state.List}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({List: itemValue})
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            {/* <View style={{flex:1}}>
                <DropdownMenu
                    style={{flex:1}}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    handler={(selection, row) => this.setState({List: data[selection][row]})}
                    data={data}
                >

                </DropdownMenu>
            </View> */}
         <Button 
            title='Create'
            icon={
                <Icon
                  name="check-circle"
                  size={15}
                  color="white"
                />
              }
            buttonStyle={{backgroundColor:'#4FB3FF', paddingTop: 15,paddingBottom:15}}
            />
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
    backgroundColor: '#EFF2F7'
  },
  formHeader:{
    fontSize:20,
    fontWeight: '400'
  },

  setupText:{
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },

  inputText:{
    width: 340,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize:20,
    borderWidth:2,
    borderRadius:5,
    borderColor: '#aaa'
  }
});

