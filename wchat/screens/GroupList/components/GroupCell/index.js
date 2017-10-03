import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

export default class GroupCell extends Component {
  render() {
    console.log("this.props.name" + this.props.name)
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={{uri: this.props.imageUrl}} />
          <View style={styles.info}>
            <Text style={styles.name}>{this.props.name} </Text>
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
  image: {
    height: 80,
    width: 80,
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
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC',
    marginRight: 10,
    marginLeft: 70,
  }
})
