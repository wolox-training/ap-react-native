import { ACTION } from './constants.js'

const initialState = { loading: false, token: null }

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return {
        ...state,
        loading: true
      }
    case ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token
      }
    case ACTION.LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      }
    case ACTION.LOGOUT:
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}

export default auth
