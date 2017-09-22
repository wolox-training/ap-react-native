import React from 'react';
import './styles.css';
import Cover from '../../../../components/Cover/index.js'
import {SUGGESTIONS} from './strings.js'

function Sugestions({books}) {
  return (
    <div className="Sugestions">
      <h2>{SUGGESTIONS}</h2>
      <div className="Sugestions-booklist">
        {books.map(book =>
          <div key={book.id} className="Sugestions-cover">
            <Cover imageUrl={book.image_url} height={124} width={87} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sugestions;
