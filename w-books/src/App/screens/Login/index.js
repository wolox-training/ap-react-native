import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import './styles.css';
import { actionCreators as authActions } from '../../../redux/auth/actions.js'
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
    this.props.dispatch(
      authActions.login({email: this.state.email,
                         password: this.state.password})
    )
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

export default withRouter(connect()(LoginContainer));
