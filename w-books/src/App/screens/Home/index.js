import React, { Component } from 'react';
import Header from '../../components/Header/index.js';
import './styles.css';
import BookGrid from  '../../components/BookGrid/index.js';
import BookList from './dummy-books.json';
import FilterSelector from './components/FilterSelector/index.js';
import FilterInput from './components/FilterInput/index.js';
import SearchButton from './components/SearchButton/index.js';

class Home extends Component {
  state = {filterType: "Author"}
  select = (e) => {
    this.setState({filterType: e.target.value})
  }
  filter = (e) => {
    this.setState({filter: e.target.value})
  }
  render() {
    let books = BookList
    if (this.state.filter != null){
      if (this.state.filterType === "Author")
      {
        books = books.filter( book => book.author.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
      } else {
        books = books.filter( book => book.title.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
      }
    }
    return (
      <div className="Home">
        <Header />
        <div className="Home-container">
          <div className="Home-filter-bar">
            <FilterSelector onChange={this.select} />
            <FilterInput onChange={this.filter}/>
          </div>
          <BookGrid books={books} />
        </div>
      </div>
    );
  }
}

export default Home;
