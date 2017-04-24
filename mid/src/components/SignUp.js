import React, { Component } from 'react';
import { View,TextInput } from 'react-native';
import { List, ListItem , Text, Button} from 'react-native-elements';

import animals from '../json/animal.json';

// Make a component
class SignUp extends Component {

  render() {
    const {container,text, center, box_1, box_2, box_3} = styles;
    return (
      <View style={container}>
            <View style={[center]}>
              <Text style={[text]}>帳號</Text>
              <TextInput style={[box_1]} />  
            </View>
            <View style={[center]}>
              <Text style={[text]}>密碼</Text>
              <TextInput style={[box_1]} />
            </View>
            <View style={[center]}>
              <Text style={[text]}>確認密碼</Text>
              <TextInput style={[box_2]} />
            </View>
            <View style={[center]}>
              <Text style={[text]}>姓名</Text>
              <TextInput style={[box_1]} />
            </View>
            <View style={[center]}>
              <Text style={[text]}>電話</Text>
              <TextInput style={[box_1]} />
            </View>
            <View style={[center]}>
              <Text style={[text]}>E-mail</Text>
              <TextInput style={[box_3]} />
            </View>
            <Button
                title='確認'
                buttonStyle={{borderRadius:3,top:30,width:274,height:42}}
                backgroundColor='#ff7f24'
             />
      </View>
    );
  }
}

const styles = {
  container:{
    flex:1,
    paddingTop:45,
    alignItems:'center',
    backgroundColor:'white',
  },
  text:{
    fontSize:14,
    marginTop:7,
  },
  center:{
    marginBottom:15,
    flexDirection:'row',
  },
  box_1:{
    width:243,
    height:30,
    marginLeft:6,
    borderColor:'#cccccc',
    borderWidth:1,
    borderRadius:3,
  },
  box_2:{
    width:215,
    height:30,
    marginLeft:6,
    borderColor:'#cccccc',
    borderWidth:1,
    borderRadius:3,
  },
  box_3:{
    width:229,
    height:30,
    marginLeft:6,
    borderColor:'#cccccc',
    borderWidth:1,
    borderRadius:3,
  }
};
export default SignUp;
