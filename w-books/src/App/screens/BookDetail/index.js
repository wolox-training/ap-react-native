import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import BookList from '../../../assets/dummy-books.json';
import CommentList from '../../../assets/dummy-comments.json';
import BookDetail from './layout.js'

function BookDetailContainer({ match }) {
  console.log("BookList: " + BookList)
  console.log("match.params.bookId" + match.params.bookId)
  let book = BookList.find((element) => { return element.id == match.params.bookId})
  return <BookDetail book={book}
                     suggestions={getSuggestions()}
                     comments={CommentList} />
}

function getSuggestions() {
  return BookList.slice(0,4)
}

export default BookDetailContainer;
