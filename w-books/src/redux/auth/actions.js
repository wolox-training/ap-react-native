import { push } from 'react-router-redux'
import Authenticate, { logOut as logOutService } from '../../services/AuthService.js'
import { ACTION, PATH } from './constants.js'

export const actionCreators = {
  login({email, password}) {
    return async dispatch => {
      dispatch({ type: ACTION.LOGIN });
      try {
        Authenticate({email: email, password: password})
        .then((token) => {
          dispatch(push(PATH.DASHBOARD))
          dispatch(actionCreators.loginSuccess());
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.loginFailure(e));
      }
    };
  },
  loginSuccess() {
    return {
      type: ACTION.LOGIN_SUCCESS,
    };
  },
  loginFailure(error) {
    return {
      type: ACTION.LOGIN_FAILURE,
      error: { error }
    };
  },
  logOut() {
    return async dispatch => {
      logOutService()
      dispatch({ type: ACTION.LOG_OUT });
      dispatch(push(PATH.LOGIN));
    };
  }
};
