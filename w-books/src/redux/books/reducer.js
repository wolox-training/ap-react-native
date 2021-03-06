import { ACTION } from './constants.js'

const initialState = {loading: false, list: []}

const books = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_BOOKS:
      return {
        ...state,
        loading: true
      }
    case ACTION.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.books,
        filteredList: action.books
      }
    case ACTION.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case ACTION.FILTER_BOOKS:
      let filteredList = state.list
      if (action.filterInput != null){
        if (action.filterType === "Author")
        {
          filteredList = filteredList.filter( book => book.author.toLowerCase()
          .includes(action.filterInput.toLowerCase()))
        } else {
          filteredList = filteredList.filter( book => book.title.toLowerCase()
          .includes(action.filterInput.toLowerCase()))
        }
      }
      return {
        ...state,
        filteredList
      }
    default:
      return state
  }
}

export default books
