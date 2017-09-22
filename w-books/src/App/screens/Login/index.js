import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './styles.css';
import Authenticate from '../../../services/AuthService.js'
import Login from './layout.js'
import {
  emailValidation,
  passwordValidation
} from '../../../utils/validations.js'

class LoginContainer extends Component {
  state = {email: "", password: ""}
  inputEmail = (e) => {
    this.setState({email: e.target.value})
  }
  inputPassword = (e) => {
    this.setState({password: e.target.value})
  }
  submit = (e) => {
    Authenticate({email: this.state.email,
                  password: this.state.password })
                  .then(() => {
                    this.props.history.push('/dashboard')
                  })
                  .catch((error) => {
                    alert (error);
                  });
  }
  render() {
    const inputValid = emailValidation(this.state.email) &&
                       passwordValidation(this.state.password)
    return <Login inputEmail={this.inputEmail}
                  inputPassword={this.inputPassword}
                  onSubmit={this.submit}
                  inputValid={inputValid} />;
  }
}

export default withRouter(LoginContainer);
