import React, { Component } from 'react';
import chats from '../../shared/assets/contacts.json'
import add_chat_icon from '../../shared/assets/add-chat.png';
import ContactTable from '../shared/components/ContactTable/index.js'

export default class ChatListContainer extends Component {
  render() {
    return (
      <ContactTable
        data={chats}
        addIcon={add_chat_icon}
        onAdd={()=>{}}
        />
    );
  }
}
