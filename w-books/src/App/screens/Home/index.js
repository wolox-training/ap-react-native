import React, { Component } from 'react';
import Header from '../../components/Header/index.js';
import './styles.css';
import BookGrid from  '../../components/BookGrid/index.js';
import BookList from './dummy-books.json';
import FilterSelector from './components/FilterSelector/index.js';
import FilterInput from './components/FilterInput/index.js';
import SearchButton from './components/SearchButton/index.js';

class Home extends Component {
  state = {filterType: "Author", filterInput: null, bookList: BookList}
  select = (e) => {
    this.setState({filterType: e.target.value})
  }
  filter = (e) => {
    this.setState({filterInput: e.target.value})
  }
  submit = (e) => {
    const books = this.getFilteredBookList();
    this.setState({bookList: books})
  }
  getFilteredBookList = () => {
    let books = BookList
    if (this.state.filterInput != null){
      if (this.state.filterType === "Author")
      {
        books = BookList.filter( book => book.author.toLowerCase()
        .includes(this.state.filterInput.toLowerCase()))
      } else {
        books = BookList.filter( book => book.title.toLowerCase()
        .includes(this.state.filterInput.toLowerCase()))
      }
    }
    return books;
  }
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-container">
          <div className="Home-filter-bar">
            <FilterSelector onChange={this.select} />
            <FilterInput onChange={this.filter}/>
            <SearchButton onClick={this.submit}/>
          </div>
          <BookGrid books={this.state.bookList} />
        </div>
      </div>
    );
  }
}

export default Home;
