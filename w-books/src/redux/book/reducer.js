const initialState = { loading: false, detail: null, comments: null, suggestions: null }

const book = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOK':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        detail: action.detail
      }
    case 'FETCH_BOOK_FAILURE':
      return {
        ...state,
        loading: false
      }
    case 'FETCH_COMMENTS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        loading: false,
        comments: action.comments
      }
    case 'FETCH_COMMENTS_FAILURE':
      return {
        ...state,
        loading: false
      }
    case 'FETCH_SUGGESTIONS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_SUGGESTIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        suggestions: action.suggestions
      }
    case 'FETCH_SUGGESTIONS_FAILURE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default book
