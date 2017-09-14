import React, { Component } from 'react';
import wlogo from '../../../assets/Header/wbooks_logo.svg';
import icon_notifications from '../../../assets/Header/notifications.svg';
import icon_add_book from '../../../assets/Header/add_book.svg';
import icon_user from '../../../assets/Header/user_dummy.png';
import './styles.css';

function Header () {
  return (
    <div className="Header">
      <img src={wlogo} className="Header-logo" width="182" height="42" alt="WBooks" />
      <div className="Header-menu">
        <img className="Header-button notifications" src={icon_notifications} width="30" height="30" alt="Notifications Icon" />
        <img className="Header-button add-book" src={icon_add_book} width="30" height="30" alt="Add Book Icon" />
        <img className="Header-button user-image" src={icon_user} width="40" height="40" alt="User Icon" />
      </div>
    </div>
  )
}

export default Header;
