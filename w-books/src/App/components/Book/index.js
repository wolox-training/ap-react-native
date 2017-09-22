import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import Cover from '../Cover/index.js'

function Book(props) {
  return (
    <Link to={`book/${props.book.id}`}>
      <div className="Book" >
        <Cover height={182} width={128} imageUrl={props.book.image_url}/>
        <h2 className="Book-title">{props.book.title}</h2>
        <h2 className="Book-author">{props.book.author}</h2>
      </div>
    </Link>
  );
}

export default Book;
