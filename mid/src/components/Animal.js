import React, { Component } from 'react';
import { ScrollView,View ,Text,Image} from 'react-native';
import { Icon,List, ListItem } from 'react-native-elements';

import animals from '../json/animal.json';

// Make a component
class Animal extends React.Component {

  state = { animals: [] };

  componentWillMount() {
    this.setState({ animals });
  }


  goToPageTwo = (animalinfo) => {
    this.props.navigation.navigate('AnimalInfo', { ...animalinfo });
  };


  render() {
    return (
      <ScrollView style={{marginTop:-21,}}>
        <List>
          {this.state.animals.map((animalinfo) => (
            <ListItem
              key={animalinfo.title}
              avatar={{uri: animalinfo.image_1 }}
              avatarStyle={{width:100,height:100,top:3}}
              subtitle={
                <View style={styles.info}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.textset}>{animalinfo.title}</Text>
                    <Icon 
                    name='face'
                    color={animalinfo.sexcolor}
                    iconStyle={{top:2,left:4}}
                    size={18}
                  />
                  </View>
                  <Text style={styles.textset}>{animalinfo.category}</Text>
                  <Text style={styles.textset}>{animalinfo.kind}</Text>
                  <Text style={styles.textset}>{animalinfo.age}</Text>
                </View>
              }
              onPress={() => this.goToPageTwo(animalinfo)}
              
            />
            
          ))}
        </List>
      </ScrollView>
    );
  }
}
const styles={
  info:{
    marginLeft:20,
  },
  textset:{
    fontSize:18,
    marginTop:7,
  }
}

export default Animal;
