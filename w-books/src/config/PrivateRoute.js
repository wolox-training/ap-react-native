import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

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

export default PrivateRoute;
