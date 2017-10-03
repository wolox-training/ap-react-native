import React, { Component } from 'react';
import { Text } from 'react-native';
import { TabNavigator } from "react-navigation";
import ContactList from '../ContactList/index.js'
import GroupList from '../GroupList/index.js'

const MainScreenNavigator = TabNavigator({
  Chats: { screen: ContactList },
  Grupos: { screen: GroupList },
  Contacts: { screen: ContactList },
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'W-Chat',
  };
  render() {
    return <MainScreenNavigator />;
  }
}
