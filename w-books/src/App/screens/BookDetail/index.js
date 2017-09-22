import React, { Component } from 'react';
import './styles.css';
import { getBook, getSuggestions, getComments} from '../../../services/BookService.js';
import BookDetail from './layout.js'

class BookDetailContainer extends Component {
  state = { bookId: this.props.match.params.bookId,
            book: null,
            suggestions: null,
            comments: null }
  componentWillMount() {
    getBook(this.state.bookId).then((component) => {
      this.setState({book: component})
    })
    getSuggestions(this.state.bookId).then((list) => {
      this.setState({suggestions: list})
    })
    getComments(this.state.bookId).then((list) => {
      this.setState({comments: list})
    })
  }
  render() {
    return <BookDetail book={this.state.book}
                       suggestions={this.state.suggestions}
                       comments={this.state.comments} />
  }
}

export default BookDetailContainer;
