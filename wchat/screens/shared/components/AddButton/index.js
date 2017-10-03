import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles.js'

const AddButton = ({imageSource, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.btnIcon} source={imageSource} />
    </TouchableOpacity>
  );
}

export default AddButton
