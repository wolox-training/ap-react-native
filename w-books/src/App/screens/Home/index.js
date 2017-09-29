import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles.css';
import BookGrid from  '../../components/BookGrid/index.js';
import FilterSelector from './components/FilterSelector/index.js';
import FilterInput from './components/FilterInput/index.js';
import SearchButton from './components/SearchButton/index.js';
import { actionCreators as booksActions } from '../../../redux/books/actions.js'

class Home extends Component {
  state = {filterType: "Author", filterInput: null}
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
    this.props.dispatch(
      booksActions.filterBooks(this.state.filterType, this.state.filterInput)
    )
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
          <BookGrid books={this.props.filteredList}/>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  bookList: [],
  filteredList: []
};

const mapStateToProps = (state) => ({
  bookList: state.books.list,
  filteredList: state.books.filteredList
})

export default connect(
  mapStateToProps,
)(Home)
