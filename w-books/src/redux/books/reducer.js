const initialState = {loading: false, list: []}

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.books
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default books
