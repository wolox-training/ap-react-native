import React, { Component } from 'react';
import AppRoutes from './config/routes.js';
import { BrowserRouter as Router } from 'react-router-dom'
import Axios from './config/api.js';
import './App.css'

class App extends Component {
  componentWillMount() {
    Axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
  }
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
