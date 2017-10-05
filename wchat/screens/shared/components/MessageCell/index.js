import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js'

export default function MessageCell(props) {
  return (
    <View style={[styles.container, props.isOwner? styles.owner : styles.contact]}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  );
}
