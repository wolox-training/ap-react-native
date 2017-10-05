import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Chat from './layout.js'
import { actionCreators as chatsActions } from '../../redux/chats/actions.js'

class ChatContainer extends Component {
  componentWillMount() {
    const contactId = this.props.navigation.state.params.id
    const ownerId = this.props.ownerId
    this.props.dispatch(chatsActions.fetchChats(ownerId, contactId))
  }
  render() {
    return (
      <Chat chats={this.props.chats} ownerId={this.props.ownerId}/>
    );
  }
}

// I´m assuming the account owner is 1 because there is no login
ChatContainer.defaultProps = {
  ownerId: 1
};

ChatContainer.propTypes = {
  chats: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            createdAt: PropTypes.number,
            body: PropTypes.string,
            senderId: PropTypes.number,
            receiverId: PropTypes.number
          })
         )
};

const mapStateToProps = (state) => ({
  contactId: state.contactId,
  chats: state.chats.list
})

export default connect(mapStateToProps,)(ChatContainer);
