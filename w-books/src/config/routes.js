import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../App/screens/Home/index.js'
import BookDetail from '../App/screens/BookDetail/index.js';
import Login from '../App/screens/Login/index.js';
import Header from '../App/components/Header/index.js';

const isAuthenticated = () => {
  return localStorage.getItem('access_token') !== null;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/dashboard',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

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
