import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './styles.css';
import Authenticate from '../../../services/AuthService.js'
import wlogo from '../../../assets/Header/wbooks_logo.svg';

class Login extends Component {
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
  validateEmail = () => {
    return (this.state.email.length > 0 && this.state.email.includes("@"))
  }
  validatePassword = () => {
    if (this.state.password.length >= 8 && this.state.password.length <= 52) {
      const regLetters = new RegExp("[^a-z|^A-Z]");
      const regNumbers = new RegExp("[^0-9]");
      return regLetters.test(this.state.password) && regNumbers.test(this.state.password);
    }
    return false
  }
  render() {
    const inputValid = this.validateEmail() && this.validatePassword()
    return (
      <div className="Login">
        <div className="Login-container">
          <img src={wlogo} className="Login-logo" alt="WBooks" />
          <h3 className="Login-input-label">Email:</h3>
          <input className="Login-input" type="text" placeholder="example@wolox.com.ar" onChange={this.inputEmail}/>
          <h3 className="Login-input-label">Password:</h3>
          <input className="Login-input" type="password" onChange={this.inputPassword}/>
          <button type="button" className="Login-button" onClick={this.submit} disabled={!inputValid}>
            Ingresar
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
