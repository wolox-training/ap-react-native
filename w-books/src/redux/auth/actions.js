import { push } from 'react-router-redux'
import Authenticate from '../../services/AuthService.js'

export const actionCreators = {
  login({email, password}) {
    return async dispatch => {
      dispatch({ type: 'LOGIN' });
      try {
        Authenticate({email: email, password: password})
        .then((token) => {
          dispatch(push('/dashboard'))
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
      type: 'LOGIN_SUCCESS',
      payload: { token }
    };
  },
  loginFailure(error) {
    return {
      type: 'LOGIN_FAILURE',
      payload: { error }
    };
  }
};
