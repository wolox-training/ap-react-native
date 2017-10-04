import React from 'react';
import { Image } from 'react-native';
import SearchButton from './shared/components/SearchButton/index.js';
import { CHATS, CONTACTS, GROUPS } from './strings.js';
import chats_icon from '../shared/assets/chats.png';
import contacts_icon from '../shared/assets/contacts.png';
import groups_icon from '../shared/assets/groups.png';
import styles from './styles.js';

export function homeOptions() {
  return {
    headerStyle: styles.navbar,
    headerTitleStyle: styles.navtitle,
    headerRight: SearchButton(),
    title: 'W-Chat'
  }
}

export function chatsOptions(){
  return {
    tabBarLabel: CHATS,
    tabBarIcon: ({ tintColor }) => {
      return ( <Image source={chats_icon}
        style={[styles.icon, {tintColor: tintColor}]} />
      );
    }
  }
}

export function contactsOptions(){
  return {
    tabBarLabel: CONTACTS,
    tabBarIcon: ({ tintColor }) => {
      return ( <Image source={contacts_icon}
        style={[styles.icon, {tintColor: tintColor}]} />
      );
    }
  }
}

export function groupsOptions(){
  return {
    tabBarLabel: GROUPS,
    tabBarIcon: ({ tintColor }) => {
      return ( <Image source={groups_icon}
        style={[styles.icon, {tintColor: tintColor}]} />
      );
    }
  }
}
