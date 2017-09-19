import React from 'react';
import RentButton from './components/RentButton/index.js'
import './styles.css';
import Cover from '../../../../components/Cover/index.js'

function Information({book}) {
  return (
    <div className="Information">
      <div className="Information-cover">
        <Cover imageUrl={book.image_url} height="272" width="191" />
      </div>
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
