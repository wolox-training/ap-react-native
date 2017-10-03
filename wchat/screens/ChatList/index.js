import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './styles.js'
import ChatList from './layout.js'
import chats from '../../shared/assets/contacts.json'
import chats_icon from '../../shared/assets/chats.png'
import { CHATS } from './strings.js'

function ChatsIcon({ tintColor }) {
  return (
    <Image source={chats_icon}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  );
}

export default class ChatListContainer extends Component {
  static navigationOptions = {
    tabBarLabel: CHATS,
    tabBarIcon: ChatsIcon ,
  };
  render() {
    return (
      <ChatList chats={ chats } />
    );
  }
}
