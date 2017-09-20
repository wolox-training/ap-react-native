import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
  state = {email: "", password: ""}
  inputEmail = (e) => {
    this.setState({email: e.target.value})
  }
  inputPassword = (e) => {
    this.setState({password: e.target.value})
  }
  submit = (e) => {
    console.log("Email: " + this.state.email + ", Password: " + this.state.password)
  }
  validateEmail = () => {
    return (this.state.email.length > 0 && this.state.email.includes("@"))
  }
  validatePassword = () => {
    return (this.state.password.length >= 8 && this.state.password.length <= 52)
  }
  render() {
    const inputValid = this.validateEmail() && this.validatePassword()
    return (
      <div className="Login">
        <div className="Login-container">
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

export default Login;
