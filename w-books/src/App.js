import React, { Component } from 'react';
import AppRoutes from './config/routes.js';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <AppRoutes />
          </Router>
        </div>
    );
  }
}

export default App;
