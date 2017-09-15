import React from 'react';
import './styles.css';
import DefaultImage from './components/DefaultImage/index.js'

function Book(props) {
  return (
    <div className="Book">
      { props.imageUrl !== null ?
        <img src={props.imageUrl} className="Book-image" alt="Portada" /> :
        <DefaultImage />
      }
      <h2 className="Book-title">{props.title}</h2>
      <h2 className="Book-author">{props.author}</h2>
    </div>
  );
}

export default Book;
