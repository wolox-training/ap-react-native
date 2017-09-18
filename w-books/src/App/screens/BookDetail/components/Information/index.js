import React from 'react';
import DefaultImage from '../../../../components/DefaultImage/index.js'
import RentButton from './components/RentButton/index.js'
import './styles.css';

function Information({book}) {
  return (
    <div className="Information">
      { book.image_url !== null ?
        <img src={book.image_url} className="Information-image" alt="Portada" /> :
        <DefaultImage />
      }
      <div className="Information-container">
        <h2 className="Information-title">{book.title}</h2>
        <h3 className="Information-author">{book.author}</h3>
        <h3 className="Information-year">{book.year}</h3>
        <h3 className="Information-genre">{book.genre.toUpperCase()}</h3>
        <p className="Information-resume">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <RentButton />
    </div>
    </div>
  );
}

export default Information;
