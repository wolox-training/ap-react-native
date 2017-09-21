import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import Comments from  './components/Comments/index.js';
import Information from  './components/Information/index.js';
import Sugestions from  './components/Sugestions/index.js';

function BookDetail({ book, suggestions, comments }) {
  return (
    <div className="BookDetail">
      <Link className="BookDetail-back" to={`../dashboard`}><p>&lt;-Volver</p></Link>
      <div className="BookDetail-container">
        <Information book={book}/>
        <div className="BookDetail-separator" />
        <Sugestions books={suggestions}/>
        <div className="BookDetail-separator" />
        <Comments comments={comments}/>
      </div>
    </div>
  );
}

export default BookDetail;
