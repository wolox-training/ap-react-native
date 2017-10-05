import React from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';
import MessageCell from '../shared/components/MessageCell/index.js';

export default function Chat(props) {
  return (
    <View >
      {props.chats.map(chat =>
        <MessageCell
          key={chat.id}
          text={chat.body}
          time={chat.createdAt}
          isOwner= {chat.senderId == props.ownerId}
        />
      )}
    </View>
  );
}
