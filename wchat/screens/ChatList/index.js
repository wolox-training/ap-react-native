import React, { Component } from 'react';
import ChatList from './layout.js'
import chats from '../../shared/assets/contacts.json'

export default class ChatListContainer extends Component {
  render() {
    return (
      <ChatList chats={ chats } />
    );
  }
}
