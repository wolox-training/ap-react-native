import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './App/components/Header/index.js';
import AppRoutes from './config/routes.js';

import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <AppRoutes />
        </div>
    );
  }
}

export default App;
