import React, { Component } from 'react';
import contacts from '../../shared/assets/contacts.json'
import add_contact_icon from '../../shared/assets/add-contact.png';
import ContactTable from '../shared/components/ContactTable/index.js'

export default class ContactListContainer extends Component {
  render() {
    return (
      <ContactTable
        data={contacts}
        addIcon={add_contact_icon}
        onAdd={()=>{}}
        />
    );
  }
}
