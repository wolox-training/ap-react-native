import React from 'react';
import icon_search from '../../../../../assets/Home/search.svg';
import './styles.css';

const SearchButton = (props) => (
  <button className="Home-filter-button" onClick={props.onClick}>
    <img src={icon_search} alt="Search" />
  </button>
)

export default SearchButton;
