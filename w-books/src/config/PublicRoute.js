import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'
import { isAuthenticated } from '../services/AuthService.js'

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

export default PublicRoute;
