import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import BookList from '../../../assets/dummy-books.json';
import CommentList from '../../../assets/dummy-comments.json';
import BookDetail from './layout.js'

class BookDetailContainer extends Component {
  constructor({match}) {
    super()
    this.state = { bookId: match.params.bookId, book: null }
  }
  componentWillMount() {
    let book = BookList.find((element) => { return element.id == this.state.bookId})
    this.setState({book: book})
  }
  render() {
    return <BookDetail book={this.state.book}
                       suggestions={getSuggestions()}
                       comments={CommentList} />
  }
}

function getSuggestions() {
  return BookList.slice(0,4)
}

export default BookDetailContainer;
