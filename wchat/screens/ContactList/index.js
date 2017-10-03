import React, { Component } from 'react';
import ContactList from './layout.js'
import contacts from '../../shared/assets/contacts.json'

export default class ContactListContainer extends Component {
  render() {
    return (
      <ContactList contacts={ contacts } />
    );
  }
}
