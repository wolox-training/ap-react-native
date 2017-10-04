import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  chatsOptions,
  contactsOptions,
  groupsOptions,
  homeOptions
} from './navigationOptions.js'
import ChatList from './ChatList/index.js'
import ContactList from './ContactList/index.js'
import GroupList from './GroupList/index.js'
import { mainColor } from '../shared/utils/colors.js'
import styles from './styles.js'

const HomeTabNavigator = TabNavigator({
    Chats: {
      screen: ChatList,
      navigationOptions: chatsOptions()
     },
    Contacts: {
       screen: ContactList,
       navigationOptions: contactsOptions()
    },
    Groups: {
      screen: GroupList,
      navigationOptions: groupsOptions()
    },
  }, {
    animationEnabled: true,
    tabBarOptions: {
      style: styles.tabbar,
      activeTintColor: mainColor,
    }
  }
);

const App = StackNavigator({
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: homeOptions()
  },
});

export default App