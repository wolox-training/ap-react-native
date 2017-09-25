import React from 'react';
import Home from '../App/screens/Home/index.js'
import BookDetail from '../App/screens/BookDetail/index.js';
import Login from '../App/screens/Login/index.js';
import Header from '../App/components/Header/index.js';
import PublicRoute from './PublicRoute.js'
import PrivateRoute from './PrivateRoute.js'
import { isAuthenticated } from '../services/AuthService.js'

function AppRoutes() {
  return (
    <div>
      {isAuthenticated() ? <Header /> : null }
      <PublicRoute exact path="/" component={Login}/>
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Home}/>
      <PrivateRoute path="/book/:bookId" component={BookDetail}/>
    </div>
  );
}

export default AppRoutes;
