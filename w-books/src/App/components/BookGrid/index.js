import React from 'react';
import Book from '../Book/index.js'
import './styles.css';

function BookGrid(props) {
  let books = props.books;
  return (
    <div className="BookGrid">
     {books.map(({ id, title, author, image_url }) =>
       <Book key={id} title={title} author={author} imageUrl={image_url}/>
     )}
    </div>
  );
}

export default BookGrid
