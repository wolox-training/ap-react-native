import { getContacts } from '../../services/ChatService.js'

export const ACTION = {
  FETCH_CONTACTS : 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS: 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILURE : 'FETCH_CONTACTS_FAILURE',
};

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
