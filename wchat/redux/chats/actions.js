import { getChats, sendChat } from '../../services/ChatService.js'

export const ACTION = {
  FETCH_CHATS : 'FETCH_CHATS',
  FETCH_CHATS_SUCCESS: 'FETCH_CHATS_SUCCESS',
  FETCH_CHATS_FAILURE : 'FETCH_CHATS_FAILURE',
  SUBMIT_CHAT : 'SUBMIT_CHAT',
  SUBMIT_CHAT_SUCCESS: 'SUBMIT_CHAT_SUCCESS',
  SUBMIT_CHAT_FAILURE : 'SUBMIT_CHAT_FAILURE',
};

export const actionCreators = {
  fetchChats(ownerId, contactId) {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_CHATS });
      try {
        getChats(ownerId, contactId)
        .then((chats) => {
          dispatch(actionCreators.fetchChatsSuccess(chats));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchChatsFailure(e));
      }
    };
  },
  fetchChatsSuccess(chats) {
    return {
      type: ACTION.FETCH_CHATS_SUCCESS,
      chats
    };
  },
  fetchChatsFailure(error) {
    return {
      type: ACTION.FETCH_CHATS_FAILURE,
      error
    };
  },
  submitChat(params) {
    return async dispatch => {
      dispatch({ type: ACTION.SUBMIT_CHAT });
      try {
        sendChat(params)
        .then((data) => {
          const chat = { ...params, ...data }
          dispatch(actionCreators.submitChatSuccess(chat));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.submitChatFailure(e));
      }
    };
  },
  submitChatSuccess(chat) {
    return {
      type: ACTION.SUBMIT_CHAT_SUCCESS,
      chat
    };
  },
  submitChatFailure(error) {
    return {
      type: ACTION.SUBMIT_CHAT_FAILURE,
      error
    };
  }
};
