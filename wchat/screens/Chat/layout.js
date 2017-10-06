import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import MessageCell from '../shared/components/MessageCell/index.js';
import { formattedTime } from '../../shared/utils/date.js'
import InputBox from './components/InputBox/index.js';
import styles from './styles.js'

export default class Chat extends Component {
  state = {text: ""}
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <MessageCell
      key={item.id}
      text={item.body}
      time={formattedTime(item.createdAt)}
      isOwner= {item.senderId == this.props.ownerId}
    />
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.chats}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      <InputBox
        onChangeText={this.props.onChangeText}
        onSubmit={this.props.onSubmit}
      />
      </View>
    );
  }
}
