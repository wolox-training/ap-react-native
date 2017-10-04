import { getChats } from '../../services/ChatService.js'
import { ACTION } from './constants.js'

export const actionCreators = {
  fetchChats() {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_CHATS });
      try {
        getChats()
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
