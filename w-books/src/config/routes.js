import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../App/screens/Home/index.js'
import BookDetail from '../App/screens/BookDetail/index.js';
import Login from '../App/screens/Login/index.js';
import Header from '../App/components/Header/index.js';
import PublicRoute from './PublicRoute.js'
import PrivateRoute from './PrivateRoute.js'

const isAuthenticated = () => {
  return localStorage.getItem('access_token') !== null;
}

function AppRoutes() {
  return (
    <div>
      {isAuthenticated() ? <Header /> : null }
      <Router>
        <div>
        <PublicRoute exact path="/" component={Login}/>
        <PublicRoute path="/login" component={Login}/>
        <PrivateRoute path="/dashboard" component={Home}/>
        <PrivateRoute path="/book/:bookId" component={BookDetail}/>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutes;
