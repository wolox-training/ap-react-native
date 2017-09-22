import React from 'react';
import './styles.css';
import icon_user from '../../../../../../../assets/Header/user_dummy.png';
import {ADD_COMMENT, SEND} from './strings.js'

function NewComment({comment}) {
  return (
    <div className="NewComment">
      <div className="NewComment-image-container">
        <img className="NewComment-image" src={icon_user} alt="User"/>
      </div>
      <div className="NewComment-info-container">
      <h3 className="NewComment-title">{ADD_COMMENT}</h3>
      <textarea className="NewComment-input" type="text"/>
      <button className="NewComment-button">{SEND}</button>
      </div>
    </div>
  );
}

export default NewComment;
