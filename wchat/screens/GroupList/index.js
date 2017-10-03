import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './styles.js'
import GroupList from './layout.js'
import groups from '../../shared/assets/groups.json'
import groups_icon from '../../shared/assets/groups.png'
import { GROUPS } from './strings.js'

function GroupsIcon({ tintColor }) {
  return (
    <Image source={groups_icon}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  );
}

export default class GroupListContainer extends Component {
  static navigationOptions = {
    tabBarLabel: GROUPS,
    tabBarIcon: GroupsIcon ,
  };
  render() {
    return (
      <GroupList groups={ groups } />
    );
  }
}
