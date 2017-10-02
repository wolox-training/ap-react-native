/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContactList from './screens/ContactList/index.js'

export default class wchat extends Component {
  render() {
    return (
      <ContactList />
    );
  }
}

AppRegistry.registerComponent('wchat', () => wchat);
