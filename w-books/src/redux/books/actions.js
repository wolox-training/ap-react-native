import { getBooks } from '../../services/BookService.js'

export const actionCreators = {
  fetchBooks() {
    return async dispatch => {
      dispatch({ type: 'FETCH_BOOKS' });
      try {
        getBooks()
        .then((books) => {
          dispatch(actionCreators.fetchBooksSuccess(books));
        })
        .catch((error) => {
          throw new Error(error);
        });
      } catch (e) {
        dispatch(actionCreators.fetchBooksFailure(e));
      }
    };
  },
  fetchBooksSuccess(books) {
    return {
      type: 'FETCH_BOOKS_SUCCESS',
      books
    };
  },
  fetchBooksFailure(error) {
    return {
      type: 'FETCH_BOOKS_FAILURE',
      error
    };
  },
  filterBooks(filterType, filterInput) {
    return {
      type: 'FILTER_BOOKS',
      filterType,
      filterInput
    };
  }
};
