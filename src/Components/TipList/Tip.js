import React from 'react';
import './Tip.css';

const Tip = (props) => {

  const {
    title,
    description,
    estimatedImpact, } = props.tip;

  return (
    <li className="tip-item">
      <p className="tip-points">{estimatedImpact} points</p>
      <div className="tip-info">
        <h3 className="tip-title">{title}</h3>
        <p className="tip-description">{description}</p>
      </div>
    </li>
  )
}

export default Tip;