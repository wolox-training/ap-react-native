import React from 'react';
import './styles.css';
import Header from '../../components/Header/index.js';
import Comments from  './components/Comments/index.js';
import Information from  './components/Information/index.js';
import Sugestions from  './components/Sugestions/index.js';
import BookList from '../../../assets/dummy-books.json';
import CommentList from '../../../assets/dummy-comments.json';

function BookDetail({ match }) {
  let book = BookList.find((element) => { return element.id == match.params.bookId})
  return (
    <div className="BookDetail">
      <div className="BookDetail-container">
        <Information book={book}/>
        <div className="BookDetail-separator" />
        <Sugestions books={getSuggestions()}/>
        <div className="BookDetail-separator" />
        <Comments comments={CommentList}/>
      </div>
    </div>
  );
}

function getSuggestions() {
  return BookList.slice(0,4)
}

export default BookDetail;
