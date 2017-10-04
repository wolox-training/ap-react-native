import React, { Component } from 'react';
import { AppRegistry, FlatList, View } from 'react-native';
import ContactCell from '../ContactCell/index.js'
import AddButton from '../AddButton/index.js'
import add_chat_icon from '../../../../shared/assets/add-chat.png'
import styles from './styles.js'

export default class ContactTable extends Component {
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <ContactCell
      id={item.id}
      title={item.username}
      avatarUrl={item.avatar}
    />
  );
  render() {
    const renderItem = this.props.renderItem ? this.props.renderItem : this._renderItem
    const keyExtractor = this.props.keyExtractor ? this.props.keyExtractor : this._keyExtractor
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      <AddButton imageSource={this.props.addIcon} onPress={this.props.onAdd}/>
      </View>
    );
  }
}
