import React, { Component } from 'react';
import {  AppRegistry,StyleSheet,Text,View,TextInput} from 'react-native';
import {Icon  ,Button,List, ListItem} from 'react-native-elements';

// Make a component
class Member extends Component {

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <TextInput 
            style={styles.textinput}
            placeholder='帳號'
          />
        </View>
        <View style={styles.text}>
          <TextInput 
            style={styles.textinput}
            placeholder='密碼'
            icon={{ name: 'visibility'}}
            password="true"
           />
           <View style={styles.iconset}>
            <Icon
                name='visibility'
                color='#cccccc'
                iconStyle={{top:-31,right:7}}
              />
            </View>
        </View>

        <Text style={styles.bottom_text}>忘了密碼?</Text>
        <View style={styles.btn}>
          <Button
              title='註冊'
              onPress={() => this.goToSignUp()}
              buttonStyle={{borderRadius:3,top:20,width:130,height:40,}}
            />
            <Button
              title='登入'
              onPress={() => this.goToSignIn()}
              buttonStyle={{borderRadius:3,top:20,width:130,height:40,}}
              backgroundColor='#ff7f24'
            />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: 'white',
  },
  text:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:10,
  },
  textinput: {
    height:40,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  bottom_text:{
    color:'#27b5ee',
    fontSize:14,
    marginLeft:25,
    textAlign:'left',
    fontWeight:'bold'
  },
  btn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  iconset:{
    alignItems:'flex-end',
  },
})
export default Member;
