import React, { Component } from 'react';
import { AppRegistry, FlatList, Text, View } from 'react-native';
import ContactCell from '../shared/components/ContactCell/index.js'
import styles from './styles.js'

export default class ChatList extends Component {
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <ContactCell
      id={item.id}
      title={item.username}
      avatarUrl={item.avatar}
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
      </View>
    );
  }
}
