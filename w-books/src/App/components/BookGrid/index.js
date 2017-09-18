import React from 'react';
import Book from '../Book/index.js'
import Proptypes from 'prop-types';
import './styles.css';

function BookGrid({books}) {
  return (
    <div className="BookGrid">
     {books.map(book =>
       <Book key={book.id} book={book}/>
     )}
    </div>
  );
}

BookGrid.propTypes = {
  book: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      title: Proptypes.string,
      author: Proptypes.string,
      image_url: Proptypes.string
    })
  )
}

export default BookGrid
