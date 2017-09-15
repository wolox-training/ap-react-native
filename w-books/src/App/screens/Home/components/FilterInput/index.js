import React from 'react';
import './styles.css';

const FilterInput = (props) => (
   <input className="Home-filter-input" onChange={props.onChange}
    type="text"
    placeholder="Buscar..."
    onChange={props.onChange}/>
 )

export default FilterInput;
