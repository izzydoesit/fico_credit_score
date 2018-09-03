import React from 'react';
import './Factor.css';

const Factor = (props) => {

  console.log('props', props)
  const {
    title,
    description,
    direction,
    value, } = props.factor;

  return (
    <li className="factor-item">
      <p>{title}</p>
      <p>{description}</p>
      <p>{direction}</p>
      <p>{value}</p>
    </li>
  )
}

export default Factor;
