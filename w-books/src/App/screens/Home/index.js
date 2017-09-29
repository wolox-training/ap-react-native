import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './styles.css';
import BookGrid from  '../../components/BookGrid/index.js';
import FilterSelector from './components/FilterSelector/index.js';
import FilterInput from './components/FilterInput/index.js';
import SearchButton from './components/SearchButton/index.js';
import { actionCreators as booksActions } from '../../../redux/books/actions.js'

class Home extends Component {
  state = {filterType: "Author", filterInput: null, filteredList: []}
  componentWillMount() {
    this.props.dispatch(booksActions.fetchBooks())
  }
  select = (e) => {
    this.setState({filterType: e.target.value})
  }
  filter = (e) => {
    this.setState({filterInput: e.target.value})
  }
  submit = (e) => {
    const books = this.getFilteredBookList();
    this.setState({filteredList: books})
  }
  getFilteredBookList = () => {
    let books = this.props.bookList
    if (this.state.filterInput != null){
      if (this.state.filterType === "Author")
      {
        books = books.filter( book => book.author.toLowerCase()
        .includes(this.state.filterInput.toLowerCase()))
      } else {
        books = books.filter( book => book.title.toLowerCase()
        .includes(this.state.filterInput.toLowerCase()))
      }
    }
    return books;
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-container">
          <div className="Home-filter-bar">
            <FilterSelector onChange={this.select} />
            <FilterInput onChange={this.filter}/>
            <SearchButton onClick={this.submit}/>
          </div>
          <BookGrid books={this.state.filteredList}/>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  bookList: []
};

const mapStateToProps = (state) => ({
  bookList: state.books.list
})

export default connect(
  mapStateToProps,
)(Home)
