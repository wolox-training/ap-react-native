import React from 'react';
import defaultimage from '../../../../../assets/Book/default_book.svg';
import './styles.css';

function DefaultImage() {
  return (
    <div className="DefaultImage">
      <img src={defaultimage} className="DefaultImage-logo" width="75" height="75" alt="DefaultImage Logo" />
    </div>
   )
 }

export default DefaultImage
