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
  state = {
    type: this.props.navigation.state.params.type,
    interId: this.props.navigation.state.params.id
  }
  componentWillMount() {
    if (this.state.type == CHAT_TYPE.CONTACT) {
      const ownerId = this.props.ownerId
      this.props.dispatch(
        chatsActions.fetchChats(this.props.ownerId, this.state.interId)
      )
    } else {
      this.props.dispatch(chatsActions.fetchGroupChats(this.state.interId))
    }
  }
  handleChangeText = (text) => {
    this.setState({text})
  }
  handleSubmit = () => {
    var params = {
      senderId: this.props.ownerId,
      body: this.state.text
    }
    if (this.state.type == CHAT_TYPE.CONTACT) {
      params = {...params, receiverId: this.state.interId}
    } else {
      params = {...params, groupId: this.state.interId}
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
