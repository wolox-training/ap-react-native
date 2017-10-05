import { getGroups } from '../../services/ChatService.js'

export const ACTION = {
  FETCH_GROUPS : 'FETCH_GROUPS',
  FETCH_GROUPS_SUCCESS: 'FETCH_GROUPS_SUCCESS',
  FETCH_GROUPS_FAILURE : 'FETCH_GROUPS_FAILURE',
};

export const actionCreators = {
  fetchGroups() {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_GROUPS });
      try {
        getGroups()
        .then((groups) => {
          dispatch(actionCreators.fetchGroupsSuccess(groups));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchGroupsFailure(e));
      }
    };
  },
  fetchGroupsSuccess(groups) {
    return {
      type: ACTION.FETCH_GROUPS_SUCCESS,
      groups
    };
  },
  fetchGroupsFailure(error) {
    return {
      type: ACTION.FETCH_GROUPS_FAILURE,
      error
    };
  }
};
