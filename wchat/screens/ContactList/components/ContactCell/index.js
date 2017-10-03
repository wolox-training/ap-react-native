import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';
import styles from './styles.js'

export default class ContactCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: this.props.avatar}} />
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.username} </Text>
          <Text style={styles.message}>Lorem ipsum dolor sit amet...</Text>
        </View>
      </View>
    );
  }
}
