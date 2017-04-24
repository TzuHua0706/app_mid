import React from 'react';
import { TabNavigator, StackNavigator,DrawerView,DrawerNavigator} from 'react-navigation';
import { View,Text } from 'react-native';
import { Icon  ,Button} from 'react-native-elements';

import Animal from './components/Animal';
import AnimalInfo from './components/AnimalInfo';
import Search from './components/Search';
import Miss from './components/Miss';
import MissAdd from './components/MissAdd';
import MissInfo from './components/MissInfo';
import MissOwner from './components/MissOwner';
import Member from './components/Member';
import MemberWant from './components/MemberWant';
import MemberWantInfo from './components/MemberWantInfo';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Other from './components/Other';
import Other_1 from './components/Other_1';
import Other_2 from './components/Other_2';
import Other_3 from './components/Other_3';
import Other_4 from './components/Other_4';
import Other_5 from './components/Other_5';

export const AnimalStack = StackNavigator({
  Animal: {
    screen: Animal,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '領養',
        style:{backgroundColor:'#fff8dc',},
        backTitle:null,
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        left:(
          <Icon
           name="search"
           iconStyle={{left:10,}}
           onPress={()=> navigate('Search')}
         />
        )
      }),
    },
  },
  AnimalInfo: {
    screen: AnimalInfo,
    navigationOptions: {
      header: ({state}) => ({
        title: '認養資訊',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        right: (
          <Icon
            name={(`${state.params.like}` === "true") ?'favorite':'favorite-border'}
            iconStyle={{right:10,}}
            color={(`${state.params.like}` === "true") ?'#ff3030':'black'}
          />
        ),
      }),
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: () => ({
        title: '搜尋',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
});


export const MissStack = StackNavigator({
  Miss: {
    screen: Miss,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '失蹤協尋',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        backTitle:null,
        right: (
          <Icon
            name='add'
            iconStyle={{right:10,}}
            onPress={()=> navigate('MissAdd')}
          />
        ),
      })
    },
  },
  MissAdd:{
    screen:MissAdd,
    navigationOptions:{
      header:()=>({
        title:'登刊走失資訊',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  MissInfo: {
    screen: MissInfo,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '失蹤動物資訊',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        right: (
          <Icon
            name='near-me'
            iconStyle={{right:10,}}
            onPress={()=> navigate('MissOwner')}
          />
        ),
      })
    },
  },
  MissOwner: {
    screen: MissOwner,
    navigationOptions: {
      header: () => ({
        title: '失主資訊',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        
      })
    },
  },
},
);

export const MemberStack = StackNavigator({
  Member: {
    screen: Member,
    navigationOptions: {
      header: () => ({
        title: '會員中心',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        backTitle:null,
      })
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: () => ({
        title: '個人資料',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: () => ({
        title: '註冊',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  MemberWant: {
    screen: MemberWant,
    navigationOptions: {
      header: () => ({
        title: '想認養清單',
        backTitle:'清單',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  MemberWantInfo: {
    screen: MemberWantInfo,
    navigationOptions: {
      header: () => ({
        title: '認養資訊',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        right: (
          <Icon
            name='favorite'
            iconStyle={{right:10,}}
            color='#ff3030'
          />
        ),
      }),
    },
  },
  
});

export const OtherStack = StackNavigator({
  Other: {
    screen: Other,
    navigationOptions: {
      header: () => ({
        title: '其他',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        backTitle:null,
      })
    },
  },
  Other_1:{
    screen: Other_1,
    navigationOptions: {
      header: () => ({
        title: '動保報案',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_2:{
    screen: Other_2,
    navigationOptions: {
      header: () => ({
        title: '動物小常識',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_3:{
    screen: Other_3,
    navigationOptions: {
      header: () => ({
        title: '意見回饋',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_4:{
    screen: Other_4,
    navigationOptions: {
      header: () => ({
        title: '關於我們',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_5:{
    screen: Other_5,
    navigationOptions: {
      header: () => ({
        title: '合作夥伴',
        tintColor:'#6fa8dc',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  }
});

export const TabRouter = TabNavigator(
  {
    AnimalStack: {
      screen: AnimalStack,
      navigationOptions: {
        tabBar: {
          label: '認養',
          icon: ({ tintColor }) => <Icon name="insert-emoticon" size={35} color={tintColor} />
        },
      },
    },
    MissStack: {
      screen: MissStack,
      navigationOptions: {
        tabBar: {
          label: '協尋',
          icon: ({ tintColor }) => <Icon name="pets" size={35} color={tintColor} />
        },
      },
    },
    MemberStack: {
      screen: MemberStack,
      navigationOptions: {
        tabBar: {
          label: '會員',
          icon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor} />
        },
      },
    },
    OtherStack: {
      screen: OtherStack,
      navigationOptions: {
        tabBar: {
          label: '其他',
          icon: ({ tintColor }) => <Icon name="more-horiz" size={35} color={tintColor} />
        },
      },
    },
  },

  {
    animationEnabled: 'true',
    tabBarOptions:{
      activeTintColor:'#ff7f24',
      style:{
        height:50,
        paddingBottom:1,
        backgroundColor:'#fff8dc',
      }
    }
  }
);

