import React, { Component } from 'react';
import wlogo from '../../../assets/Header/wbooks_logo.svg';
import icon_notifications from '../../../assets/Header/notifications.svg';
import icon_add_book from '../../../assets/Header/add_book.svg';
import icon_user from '../../../assets/Header/user_dummy.png';
import './styles.css';

function Header () {
  return (
    <div className="Header">
      <img src={wlogo} className="Header-logo" alt="WBooks" />
      <div className="Header-menu">
        <img className="Header-notifications" src={icon_notifications} alt="Notifications Icon" />
        <img className="Header-add-book" src={icon_add_book} alt="Add Book Icon" />
        <img className="Header-user-image" src={icon_user} alt="User Icon" />
      </div>
    </div>
  )
}

export default Header;
