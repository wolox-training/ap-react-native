import React, { Component } from 'react';
import { Text } from 'react-native';
import { TabNavigator } from "react-navigation";
import { mainColor } from '../../shared/utils/colors.js'
import ChatList from '../ChatList/index.js'
import ContactList from '../ContactList/index.js'
import GroupList from '../GroupList/index.js'
import styles from './styles.js'

const MainScreenNavigator = TabNavigator({
    Chats: { screen: ChatList },
    Contacts: { screen: ContactList },
    Groups: { screen: GroupList },
  }, {
    animationEnabled: true,
    tabBarOptions: {
      style: styles.tabbar,
      activeTintColor: mainColor,
    }
  }
);

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'W-Chat',
  };
  render() {
    return <MainScreenNavigator />;
  }
}
