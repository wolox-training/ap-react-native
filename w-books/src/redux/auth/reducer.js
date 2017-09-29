const initialState = { loading: false, token: null }

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.token
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}

export default auth
