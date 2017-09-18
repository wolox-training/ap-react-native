import React from 'react';
import DefaultImage from '../../../../components/DefaultImage/index.js'
import './styles.css';

function Information({book}) {
  return (
    <div className="Information">
      { book.image_url !== null ?
        <img src={book.image_url} className="Book-image" alt="Portada" /> :
        <DefaultImage />
      }
      <div className="Information-container">
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <h3>{book.year}</h3>
        <h3>{book.genre.toUpperCase()}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button>Alquilar</button>
    </div>
    </div>
  );
}

export default Information;
