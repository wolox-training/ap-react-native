import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../Home/index.js'
import { homeOptions } from './navigationOptions.js'

const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: homeOptions()
  },
});

export default App
