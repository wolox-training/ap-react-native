import { getContacts } from '../../services/ChatService.js'
import { ACTION } from './constants.js'

export const actionCreators = {
  fetchContacts() {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_CONTACTS });
      try {
        getContacts()
        .then((contacts) => {
          dispatch(actionCreators.fetchContactsSuccess(contacts));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchContactsFailure(e));
      }
    };
  },
  fetchContactsSuccess(contacts) {
    return {
      type: ACTION.FETCH_CONTACTS_SUCCESS,
      contacts
    };
  },
  fetchContactsFailure(error) {
    return {
      type: ACTION.FETCH_CONTACTS_FAILURE,
      error
    };
  }
};
