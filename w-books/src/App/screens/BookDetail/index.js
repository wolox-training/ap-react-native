import React from 'react';
import './styles.css';
import Header from '../../components/Header/index.js';
import Comments from  './components/Comments/index.js';
import Information from  './components/Information/index.js';
import Sugestions from  './components/Sugestions/index.js';
import BookList from '../../../assets/dummy-books.json';

function BookDetail({ match }) {
  let book = BookList.find((element) => { return element.id == match.params.bookId})
  return (
    <div className="BookDetail">
      <div className="BookDetail-container">
        <Information book={book}/>
        <Sugestions />
        <Comments />
      </div>
    </div>
  );
}

export default BookDetail;
