import React from 'react';
import './Factor.css';

const Factor = (props) => {

  return (
    <li className="factor-item">
      <p>{this.props.name}</p>
      <p>{this.props.statistic}</p>
      <p>{this.props.rating}</p>
    </li>
  )
}

export default Factor;
