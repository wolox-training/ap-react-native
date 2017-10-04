import React, { Component } from 'react';
import { AppRegistry, Text, TouchableOpacity, Image, View } from 'react-native';
import styles from './styles.js'

export default class ContactCell extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Image style={styles.avatar} source={{uri: this.props.avatarUrl}} />
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.title} </Text>
          <Text style={styles.message}>Lorem ipsum dolor sit amet...</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
