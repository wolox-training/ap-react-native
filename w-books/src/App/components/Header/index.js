import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './styles.css';
import Header from './layout.js'
import {logOut} from '../../../services/AuthService.js'

class HeaderContainer extends Component {
  onLogout = () => {
    logOut()
    this.props.history.push('/login')
  }
  render() {
    return <Header onLogout={this.onLogout}/>
  }
}

export default withRouter(HeaderContainer);
