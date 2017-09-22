import React from 'react';
import './styles.css';
import wlogo from '../../../assets/Header/wbooks_logo.svg';
import { EMAIL, PASSWORD, LOGIN, PLACEHOLDER } from './strings.js'

function Login({ inputEmail, inputPassword, onSubmit, inputValid }) {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={wlogo} className="Login-logo" alt="WBooks" />
        <h3 className="Login-input-label">{EMAIL}</h3>
        <input className="Login-input" type="text" placeholder={PLACEHOLDER} onChange={inputEmail}/>
        <h3 className="Login-input-label">{PASSWORD}</h3>
        <input className="Login-input" type="password" onChange={inputPassword}/>
        <button type="button" className="Login-button" onClick={onSubmit} disabled={!inputValid}>
          {LOGIN}
        </button>
      </div>
    </div>
  );
}

export default Login;
