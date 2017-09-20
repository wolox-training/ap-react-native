import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../App/screens/Home/index.js'
import BookDetail from '../App/screens/BookDetail/index.js';
import Login from '../App/screens/Login/index.js';

function AppRoutes() {
  return (
      <Router>
        <div>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Home}/>
        <Route path="/book/:bookId" component={BookDetail}/>
        </div>
      </Router>
  );
}

export default AppRoutes;
