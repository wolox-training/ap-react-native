import React, { Component } from 'react';
import Header from '../../components/Header/index.js';
import './styles.css';
import BookGrid from  '../../components/BookGrid/index.js';
import BookList from './dummy-books.json';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-container">
          <BookGrid books={BookList} />
        </div>
      </div>
    );
  }
}

export default Home;
