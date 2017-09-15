import React from 'react';
import './styles.css';

const FilterSelector = (props) => (
  <select className="Home-filter-selector" onChange={props.onChange}>
    <option>Author</option>
    <option>Title</option>
  </select>
)

export default FilterSelector;
