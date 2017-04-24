import React, { Component } from 'react';
import { ScrollView,View,Text,TextInput} from 'react-native';
import { Button ,Card,Icon} from 'react-native-elements';


// Make a component
class MissAdd extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.Container}>
          <View style={styles.Row}>
            <Icon
              name="add-a-photo"
              iconStyle={{left:-20}}
            />
            <View style={styles.photoStyle}></View>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>名字</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>性別</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>種類</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>品種</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>失蹤日期</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_2]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>體型</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>年紀</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>毛色</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_1]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>晶片編號</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_2]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>狂犬症病號</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_3]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>失蹤地點</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_2]}/>
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>特色</Text>
              <TextInput 
                style={[styles.inputStyle_2,styles.inputWidth_1]}
                multiline={true}
              />
          </View>
          <Button
                title='確定登刊'
                buttonStyle={{borderRadius:3,top:35,width:274,height:42}}
                backgroundColor='#ff7f24'
          />
        </View>
      </ScrollView>

    );
  }
}

const styles={
  Container:{
    alignItems:'center',
    flex:1,
    backgroundColor:'white',
    paddingTop:10,
    paddingBottom:70,
  },
  photoStyle:{
    width:150,
    height:100,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  Row:{
    flexDirection:'row',
    marginTop:20,
    
  },
  textStyle:{
    fontSize:14,
    marginRight:10,
  },
  inputStyle:{
    height:25,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  inputStyle_2:{
    height:100,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  inputWidth_1:{
    width:178,
  },
  inputWidth_2:{
    width:150,
  },
  inputWidth_3:{
    width:136,
  },
}

export default MissAdd;
