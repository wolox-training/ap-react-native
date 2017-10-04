import { getBook, getComments, getSuggestions } from '../../services/BookService.js'
import { ACTION } from './constants.js'

export const actionCreators = {
  fetchBook(bookId) {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_BOOK });
      try {
        getBook(bookId)
        .then((bookDetail) => {
          dispatch(actionCreators.fetchBookSuccess(bookDetail));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchBookFailure(e));
      }
    };
  },
  fetchBookSuccess(detail) {
    return {
      type: ACTION.FETCH_BOOK_SUCCESS,
      detail
    };
  },
  fetchBookFailure(error) {
    return {
      type: ACTION.FETCH_BOOK_FAILURE,
      error
    };
  },
  fetchComments(bookId) {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_COMMENTS });
      try {
        getComments(bookId)
        .then((comments) => {
          dispatch(actionCreators.fetchCommentsSuccess(comments));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchCommentsFailure(e));
      }
    };
  },
  fetchCommentsSuccess(comments) {
    return {
      type: ACTION.FETCH_COMMENTS_SUCCESS,
      comments
    };
  },
  fetchCommentsFailure(error) {
    return {
      type: ACTION.FETCH_COMMENTS_FAILURE,
      error
    };
  },
  fetchSuggestions(bookId) {
    return async dispatch => {
      dispatch({ type: ACTION.FETCH_SUGGESTIONS });
      try {
        getSuggestions(bookId)
        .then((suggestions) => {
          dispatch(actionCreators.fetchSuggestionsSuccess(suggestions));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchSuggestionsFailure(e));
      }
    };
  },
  fetchSuggestionsSuccess(suggestions) {
    return {
      type: ACTION.FETCH_SUGGESTIONS_SUCCESS,
      suggestions
    };
  },
  fetchSuggestionsFailure(error) {
    return {
      type: ACTION.FETCH_SUGGESTIONS_FAILURE,
      error
    };
  }
};
