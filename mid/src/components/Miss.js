import React, { Component } from 'react';
import { ScrollView,View ,Text} from 'react-native';
import { Icon,List, ListItem } from 'react-native-elements';

import misses from '../json/miss.json';

// Make a component
class Miss extends Component {
  state = { missess: [] };

  componentWillMount() {
    this.setState({ misses });
  }

  goToPageTwo = (missinfo) => {
    this.props.navigation.navigate('MissInfo', { ...missinfo });
  };

  render() {
    return (
      <ScrollView style={{marginTop:-21,}}>
        <List>
          {this.state.misses.map((missinfo) => (
            <ListItem
              key={missinfo.title}
              avatar={{ uri: missinfo.image}}
              avatarStyle={{width:100,height:100}}
              subtitle={
                <View style={styles.info}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.textset}>{missinfo.title}</Text>
                    <Icon 
                      name='face'
                      color={missinfo.sexcolor}
                      iconStyle={{top:2,left:4}}
                      size={18}
                    />
                  </View>
                  <Text style={styles.textset}>{missinfo.sex}</Text>
                  <Text style={styles.textset}>{missinfo.kind}</Text>
                  <Text style={styles.textset}>{missinfo.position}</Text>
                </View>
              }
              onPress={() => this.goToPageTwo(missinfo)}

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

export default Miss;