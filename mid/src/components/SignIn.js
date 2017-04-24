import React, { Component } from 'react';
import {View, Image } from 'react-native';
import { List, ListItem, Text, Icon } from 'react-native-elements';

import animals from '../json/animal.json';

// Make a component
class SignIn extends Component {

  goToWantPage = () => {
    this.props.navigation.navigate('MemberWant');
  };


  render() {
    const { container, row, img_row, img, name, t_l, t_r } = styles;
    return (
      <View style={container}>
             <View style = {[img_row]}>
               <Image source = {require('../assets/signin.jpeg')} style = {[img]} />
               <Text style = {[name]}>胖胖</Text>
             </View>
             <View style = {[row]}>
               <Text style = {[t_l]}>E-mail</Text>
               <Text style = {[t_r]}>xxx@gmail.com</Text>
             </View>
             <View style = {[row]}>
               <Text style = {[t_l]}>聯絡電話</Text>
               <Text style = {[t_r]}> 0952520173</Text>
             </View>
             <View style = {[row]}>
               <Text style = {[t_l]}>想認養清單</Text>
               <Text style = {[t_r]}>           2</Text>
               <Icon 
                name = 'keyboard-arrow-right' 
                iconStyle = {{marginLeft:60,marginTop:-7,height:20}}
                onPress={()=> this.goToWantPage()}
               />
             </View>
             <View style = {[row]}>
               <Text style = {[t_l]}>協尋狀況</Text>
               <Text style = {[t_r]}>          無</Text>
               <Icon name = 'keyboard-arrow-right' iconStyle = {{marginLeft:60,marginTop:-7,height:20}}/>
             </View>
      </View>
    );
  }
}

const styles = {
  container:{
    alignItems:'center',
    flex:1,
    backgroundColor:'white'
  },
  row:{
    marginBottom:15,
    flexDirection:'row',
    width:259,
    borderBottomColor:'#000000',
    borderBottomWidth:1,
  },
  img_row:{
    flexDirection:'row',
    width:259,
    marginTop:30,
    marginBottom:15,
  },
  img:{
    width:100,
    height:100,
  },
  name:{
    marginTop:45,
    marginLeft:10,
    fontSize:14,
  },
  t_l:{
    marginLeft:10,
    marginBottom:2,
    width:74,
    fontSize:14,
  },
  t_r:{
    marginLeft:47,
    marginBottom:1,
    fontSize:13,
  }
};

export default SignIn;
