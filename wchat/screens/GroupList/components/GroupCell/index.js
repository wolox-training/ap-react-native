import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';
import styles from './styles.js'

export default class GroupCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: this.props.imageUrl}} />
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.name} </Text>
        </View>
      </View>
    );
  }
}
