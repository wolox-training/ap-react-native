import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import Comments from  './components/Comments/index.js';
import Information from  './components/Information/index.js';
import Sugestions from  './components/Sugestions/index.js';
import {BACK} from './strings.js'

function BookDetail({ book, suggestions, comments }) {
  return (
    <div className="BookDetail">
      <Link className="BookDetail-back" to={`../dashboard`}><p>{BACK}</p></Link>
      <div className="BookDetail-container">
        {book ? <Information book={book}/> : null }
        <div className="BookDetail-separator" />
        {suggestions ? <Sugestions books={suggestions}/> : null }
        <div className="BookDetail-separator" />
        {comments ? <Comments comments={comments}/> : null }
      </div>
    </div>
  );
}

export default BookDetail;
