/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles.js'
import Home from './screens/Home/index.js'

const WChatApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: styles.navbar,
      headerTitleStyle: styles.navtitle,
    }
  },
});

export default WChatApp

AppRegistry.registerComponent('wchat', () => WChatApp);
