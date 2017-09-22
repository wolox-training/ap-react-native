import React from 'react';
import './styles.css';
import {PLACEHOLDER} from './strings.js'

const FilterInput = (props) => (
   <input className="Home-filter-input"
    type="text"
    placeholder={PLACEHOLDER}
    onChange={props.onChange}/>
 )

export default FilterInput;
