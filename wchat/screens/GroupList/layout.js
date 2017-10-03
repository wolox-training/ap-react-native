import React, { Component } from 'react';
import { AppRegistry, FlatList, View } from 'react-native';
import GroupCell from './components/GroupCell/index.js'
import styles from './styles.js'

export default class GroupList extends Component {
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => (
    <GroupCell
      id={item.id}
      name={item.name}
      imageUrl={item.imageUrl}
    />
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.groups}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
