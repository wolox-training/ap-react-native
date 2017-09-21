import React from 'react';
import './styles.css';
import wlogo from '../../../assets/Header/wbooks_logo.svg';

function Login({ inputEmail, inputPassword, onSubmit, inputValid }) {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={wlogo} className="Login-logo" alt="WBooks" />
        <h3 className="Login-input-label">Email:</h3>
        <input className="Login-input" type="text" placeholder="example@wolox.com.ar" onChange={inputEmail}/>
        <h3 className="Login-input-label">Password:</h3>
        <input className="Login-input" type="password" onChange={inputPassword}/>
        <button type="button" className="Login-button" onClick={onSubmit} disabled={!inputValid}>
          Ingresarl
        </button>
      </div>
    </div>
  );
}

export default Login;
