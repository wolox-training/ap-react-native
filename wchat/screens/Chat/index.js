import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Chat from './layout.js'
import { actionCreators as chatsActions } from '../../redux/chats/actions.js'

export const CHAT_TYPE = {
  CONTACT: 'CONTACT',
  GROUP: 'GROUP'
}

class ChatContainer extends Component {
  componentWillMount() {
    const type = this.props.navigation.state.params.type
    if (type == CHAT_TYPE.CONTACT) {
      const contactId = this.props.navigation.state.params.id
      const ownerId = this.props.ownerId
      this.props.dispatch(chatsActions.fetchChats(ownerId, contactId))
    } else {
      const groupId = this.props.navigation.state.params.id
      this.props.dispatch(chatsActions.fetchGroupChats(groupId))
    }
  }
  handleChangeText = (text) => {
    this.setState({text})
  }
  handleSubmit = () => {
    const params = {
      senderId: this.props.ownerId,
      receiverId: this.props.navigation.state.params.id,
      body: this.state.text
    }
    this.props.dispatch(chatsActions.submitChat(params))
  }
  render() {
    return (
      <Chat
        chats={this.props.chats}
        ownerId={this.props.ownerId}
        onChangeText={this.handleChangeText}
        onSubmit={this.handleSubmit}
      />
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
