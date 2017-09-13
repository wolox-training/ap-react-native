import React, { Component } from 'react';
import Header from '../../components/Header/index.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div classname="Home-container"></div>
      </div>
    );
  }
}

export default Home;
