import { ACTION } from './constants.js'

const initialState = {loading: false, list: []}

const chats = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_CHATS:
      return {
        ...state,
        loading: true
      }
    case ACTION.FETCH_CHATS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.chats
      }
    case ACTION.FETCH_CHATS_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default chats
