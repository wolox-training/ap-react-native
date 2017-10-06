import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const ChatHeader = (title, imageSource) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={{uri: imageSource}} />
      <Text style={styles.navtitle}>{title}</Text>
    </View>
  );
}

export default ChatHeader
