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
    headerBackTitle: null,
    title: 'W-Chat'
  }
}

const TabIcon = (tintColor, icon) => {
  return ( <Image source={icon}
    style={[styles.icon, {tintColor: tintColor}]} />
  );
}

export function chatsOptions(){
  return {
    tabBarLabel: CHATS,
    tabBarIcon: ({ tintColor })=>TabIcon(tintColor, chats_icon)
  }
}

export function contactsOptions(){
  return {
    tabBarLabel: CONTACTS,
    tabBarIcon: ({ tintColor })=>TabIcon(tintColor, contacts_icon)
  }
}

export function groupsOptions(){
  return {
    tabBarLabel: GROUPS,
    tabBarIcon: ({ tintColor })=>TabIcon(tintColor, groups_icon)
  }
}

export function chatOptions({navigation}){
  return {
    headerStyle: styles.navbar,
    headerTitleStyle: styles.navtitle,
    title: navigation.state.params.name,
  }
}
