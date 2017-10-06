import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js'
import submit_icon  from '../../../../shared/assets/submit.png'

export default function InputBox(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline={true}
        onChangeText={props.onChangeText}
        placeholder="Escribir mensaje..."
        onSubmitEditing={props.onSubmit}
      />
      <TouchableOpacity onPress={props.onSubmit} style={styles.btnContainer}>
        <Image style={styles.btnIcon} source={submit_icon} />
      </TouchableOpacity>
    </View>
  );
}
