import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import add_chat_icon from '../../shared/assets/add-chat.png';
import ContactTable from '../shared/components/ContactTable/index.js'
import { actionCreators as chatsActions } from '../../redux/chats/actions.js'
import { CHAT_TYPE } from '../Chat/index.js'

class ChatListContainer extends Component {
  componentWillMount() {
    this.props.dispatch(chatsActions.fetchChats())
  }
  renderItem = ({item}) => (
    <ContactCell
      id={item.id}
      title={item.username}
      avatarUrl={item.avatar}
      onPress={()=>{this.props.onSelect(item.id)}}
    />
  );
  onSelect = ({id}) => {
    this.props.navigation.navigate('Chat', { id: item.id,
                                             name: item.username,
                                             type: CHAT_TYPE.CONTACT,
                                             imageSource: item.avatar })
  }
  onAdd = () => { }
  render() {
    return (
      <ContactTable
        data={this.props.chats}
        addIcon={add_chat_icon}
        onSelect={this.onSelect}
        onAdd={this.onAdd}
        />
    );
  }
}

ChatListContainer.defaultProps = {
  chats: []
};

ChatListContainer.propTypes = {
  chats: PropTypes.array
};

const mapStateToProps = (state) => ({
  chats: state.chats.list
})

export default connect(
  mapStateToProps,
)(ChatListContainer);
