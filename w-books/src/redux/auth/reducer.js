const auth = (state = [], action) => {
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
    default:
      return state
  }
}

export default auth
