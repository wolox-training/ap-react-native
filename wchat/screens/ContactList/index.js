import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './styles.js'
import ContactList from './layout.js'
import contacts from '../../shared/assets/contacts.json'
import contacts_icon from '../../shared/assets/contacts.png'
import { CONTACTS } from './strings.js'

function ContactsIcon({ tintColor }) {
  return (
    <Image source={contacts_icon}
      style={[styles.icon, {tintColor: tintColor}]}
    />
  );
}

export default class ContactListContainer extends Component {
  static navigationOptions = {
    tabBarLabel: CONTACTS,
    tabBarIcon: ContactsIcon ,
  };
  render() {
    return (
      <ContactList contacts={ contacts } />
    );
  }
}
