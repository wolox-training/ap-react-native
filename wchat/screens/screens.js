import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { homeOptions } from './navigationOptions.js'
import ChatList from './ChatList/index.js'
import ContactList from './ContactList/index.js'
import GroupList from './GroupList/index.js'
import { mainColor } from '../shared/utils/colors.js'
import styles from './styles.js'

const HomeTabNavigator = TabNavigator({
    Chats: { screen: ChatList },
    Contacts: { screen: ContactList },
    Groups: { screen: GroupList },
  }, {
    animationEnabled: true,
    tabBarOptions: {
      style: styles.tabbar,
      activeTintColor: mainColor,
    }
  }
);

const App = StackNavigator({
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: homeOptions()
  },
});

export default App
