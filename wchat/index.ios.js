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
import Home from './screens/Home/index.js'

const WChatApp = StackNavigator({
  Home: { screen: Home },
});

export default WChatApp

AppRegistry.registerComponent('wchat', () => WChatApp);
