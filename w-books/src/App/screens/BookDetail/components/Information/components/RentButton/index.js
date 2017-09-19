import React from 'react';
import './styles.css';

const RentButton = (props) => (
  <button type="button" className="Rent-button" onClick={props.onClick}>
    Alquilar
  </button>
)

export default RentButton;
