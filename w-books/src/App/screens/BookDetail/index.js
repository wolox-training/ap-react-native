import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles.css';
import { getBook, getSuggestions, getComments} from '../../../services/BookService.js';
import BookDetail from './layout.js'
import { actionCreators as bookActions } from '../../../redux/book/actions.js'

class BookDetailContainer extends Component {
  componentWillMount() {
    const bookId = this.props.match.params.bookId
    this.props.dispatch(bookActions.fetchBook(bookId))
    this.props.dispatch(bookActions.fetchComments(bookId))
    this.props.dispatch(bookActions.fetchSuggestions(bookId))
  }
  render() {
    return <BookDetail book={this.props.book}
                       suggestions={this.props.suggestions}
                       comments={this.props.comments} />
  }
}

BookDetailContainer.defaultProps = {
  book: null,
  suggestions: [],
  comments: []
};

const mapStateToProps = (state) => ({
  book: state.book.detail,
  suggestions: state.book.suggestions,
  comments: state.book.comments
})

export default connect(
  mapStateToProps,
)(BookDetailContainer)
