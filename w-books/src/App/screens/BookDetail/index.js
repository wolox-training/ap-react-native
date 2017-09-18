import React from 'react';
import './styles.css';
import Header from '../../components/Header/index.js';
import Comments from  './components/Comments/index.js';
import Information from  './components/Information/index.js';
import Sugestions from  './components/Sugestions/index.js';

function BookDetail({ book }) {

  return (
    <div className="BookDetail">
      <Information />
      <Sugestions />
      <Comments />
    </div>
  );
}

export default BookDetail;
