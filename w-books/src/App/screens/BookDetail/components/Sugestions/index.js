import React from 'react';
import './styles.css';
import Cover from '../../../../components/Cover/index.js'

function Sugestions({books}) {
  return (
    <div className="Sugestions">
      <h2>Sugerencias</h2>
      <div className="Sugestions-booklist">
        {books.map(book =>
          <div className="Sugestions-cover">
            <Cover imageUrl={book.image_url} height={124} width={87} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sugestions;
