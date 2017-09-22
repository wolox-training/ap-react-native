import React, { Component } from 'react';
import './styles.css';
import Header from './layout.js'
import {logOut} from '../../../services/AuthService.js'

class HeaderContainer extends Component {
  onLogout = () => {
    logOut()
    window.location.reload()
  }
  render() {
    return <Header onLogout={this.onLogout}/>
  }
}

export default HeaderContainer;
