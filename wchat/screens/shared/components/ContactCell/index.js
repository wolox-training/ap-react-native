import React, { Component } from 'react';
import { AppRegistry, Text, TouchableOpacity, Image, View } from 'react-native';
import styles from './styles.js'

export default function ContactCell(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image style={styles.avatar} source={{uri: props.avatarUrl}} />
      <View style={styles.info}>
        <Text style={styles.name}>{props.title} </Text>
        <Text style={styles.message}>Lorem ipsum dolor sit amet...</Text>
      </View>
    </TouchableOpacity>
  );
}
