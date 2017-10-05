import React, { Component } from 'react';
import { AppRegistry, Text, TouchableOpacity, Image, View } from 'react-native';
import styles from './styles.js'

export default function GroupCell(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: props.imageUrl}} />
      <View style={styles.info}>
        <Text style={styles.name}>{props.name} </Text>
      </View>
    </TouchableOpacity>
  );
}
