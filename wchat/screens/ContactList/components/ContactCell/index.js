import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

export default class ContactCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.avatar} source={{uri: this.props.avatar}} />
          <View style={styles.info}>
            <Text style={styles.name}>{this.props.username} </Text>
            <Text style={styles.message}>Lorem ipsum dolor sit amet...</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  content: {
   flex: 1,
   flexDirection: 'row',
   marginVertical: 12,
  },
  avatar: {
    height: 44,
    width: 44,
    marginLeft: 16,
    borderRadius: 22,
    overflow: 'hidden',
  },
  info: {
   flex: 1,
   marginLeft: 10,
   justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    textAlign: 'left',
    color: '#999',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC',
    marginRight: 10,
    marginLeft: 70,
  }
})
