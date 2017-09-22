import React from 'react';
import './styles.css';
import icon_user from '../../../../../../../assets/Header/user_dummy.png';

function Comment({comment}) {
  const fullName = comment.user.first_name + ' ' + comment.user.last_name
  return (
    <div className="Comment">
      <div className="Comment-image-container">
        <img className="Comment-image" src={icon_user} alt="Avatar"/>
      </div>
      <div className="Comment-info-container">
      <h3 className="Comment-user">{fullName}</h3>
      <h4 className="Comment-date">{comment.created_at
}</h4>
      <div className="Comment-container">
        <p className="Comment-text">{comment.content}</p>
      </div>
      </div>
    </div>
  );
}

export default Comment;
