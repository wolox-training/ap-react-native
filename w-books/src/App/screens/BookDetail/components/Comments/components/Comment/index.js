import React from 'react';
import './styles.css';
import icon_user from '../../../../../../../assets/Header/user_dummy.png';

function Comment({comment}) {
  return (
    <div className="Comment">
      <div className="Comment-image-container">
        <img className="Comment-image" src={icon_user} alt="User"/>
      </div>
      <div className="Comment-info-container">
      <h3 className="Comment-user">{comment.user}</h3>
      <h4 className="Comment-date">{comment.date}</h4>      
      <div className="Comment-container">
        <p className="Comment-text">{comment.text}</p>
      </div>
      </div>
    </div>
  );
}

export default Comment;
