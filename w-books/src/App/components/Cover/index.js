import React from 'react';
import './styles.css';
import defaultimage from '../../../assets/Book/default_book.svg';

function Cover(props) {
  const imageSize = { height: props.height, width: props.width };
  return (
    <div className="Cover" style={imageSize}>
      { props.imageUrl !== null ?
        <img className="Cover-image" style={imageSize} src={props.imageUrl} alt="Portada" /> :
        <img className="Cover-default" src={defaultimage} alt="Portada" />
      }
    </div>
  );
}

export default Cover;
