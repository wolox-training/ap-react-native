import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './App/components/Header/index.js';
import Home from './App/screens/Home/index.js'
import BookDetail from './App/screens/BookDetail';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route path="/dashboard" component={Home}/>
            <Route path="/book/:bookId" component={BookDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
