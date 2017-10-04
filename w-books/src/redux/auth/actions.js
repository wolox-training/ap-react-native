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
          dispatch(actionCreators.loginSuccess(token));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.loginFailure(e));
      }
    };
  },
  loginSuccess(token) {
    return {
      type: ACTION.LOGIN_SUCCESS,
      payload: { token }
    };
  },
  loginFailure(error) {
    return {
      type: ACTION.LOGIN_FAILURE,
      payload: { error }
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
