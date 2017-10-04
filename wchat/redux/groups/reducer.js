import { ACTION } from './constants.js'

const initialState = {loading: false, list: []}

const groups = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_GROUPS:
      return {
        ...state,
        loading: true
      }
    case ACTION.FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.groups
      }
    case ACTION.FETCH_GROUPS_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default groups
