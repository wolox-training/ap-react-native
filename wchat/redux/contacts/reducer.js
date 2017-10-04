import { ACTION } from './constants.js'

const initialState = {loading: false, list: []}

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_CONTACTS:
      return {
        ...state,
        loading: true
      }
    case ACTION.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.contacts
      }
    case ACTION.FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default contacts
