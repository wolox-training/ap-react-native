import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import add_contact_icon from '../../shared/assets/add-contact.png';
import ContactTable from '../shared/components/ContactTable/index.js'
import { actionCreators as contactsActions } from '../../redux/contacts/actions.js'

class ContactListContainer extends Component {
  componentWillMount() {
    this.props.dispatch(contactsActions.fetchContacts())
  }
  handleSelect = ({id}) => {
    this.props.navigation.navigate('Chat', { id })
  }
  handleAdd = () => {}
  render() {
    return (
      <ContactTable
        data={this.props.contacts}
        addIcon={add_contact_icon}
        onSelect={this.handleSelect}
        onAdd={this.handleAdd}
        />
    );
  }
}

ContactListContainer.propTypes = {
  contacts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            avatar: PropTypes.string
          })
          )
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.list
})

export default connect(mapStateToProps,)(ContactListContainer);
