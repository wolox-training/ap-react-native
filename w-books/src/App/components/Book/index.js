import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './styles.css';
import DefaultImage from '../DefaultImage/index.js'

function Book(props) {
  return (
    <Link to={`book/${props.book.id}`}>
      <div className="Book" >
        { props.book.image_url !== null ?
          <img src={props.book.image_url} className="Book-image" alt="Portada" /> :
          <DefaultImage />
        }
        <h2 className="Book-title">{props.book.title}</h2>
        <h2 className="Book-author">{props.book.author}</h2>
      </div>
    </Link>
  );
}

export default Book;
