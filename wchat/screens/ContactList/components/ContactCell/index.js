import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

export default class ContactCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: this.props.avatar}} />
        <Text style={styles.name}>{this.props.username} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   paddingTop: 22
  },
  name: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  avatar: {
    height: 44,
    width: 44,
    marginLeft: 16,
  },
})
