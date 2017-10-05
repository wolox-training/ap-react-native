import { getChats } from '../../services/ChatService.js'

export const ACTION = {
  FETCH_CHATS : 'FETCH_CHATS',
  FETCH_CHATS_SUCCESS: 'FETCH_CHATS_SUCCESS',
  FETCH_CHATS_FAILURE : 'FETCH_CHATS_FAILURE',
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
  }
};
