import React from 'react';
import './styles.css';
import DefaultImage from './components/DefaultImage/index.js'

function Book(props) {
  let image = null;
  if (props.imageUrl !== null) {
    image = <img src={props.imageUrl} className="Book-image" alt="Portada" />;
  } else {
    image = <DefaultImage />;
  }
  return (
    <div className="Book">
      {image}
      <h2 className="Book-title">{props.title}</h2>
      <h2 className="Book-author">{props.author}</h2>
    </div>
  );
}

export default Book;
