// @flow

import React from 'react';
import type { FactorType } from '../../types';
import './Factor.css';

type Props = {
  factor: FactorType
}

const Factor = (props: Props) => {

  const {
    title,
    description,
    direction,
    value, } = props.factor;

  return (
    <li className="factor-item">
      <div className="factor-info">
        <p className="factor-title">{title}</p>
        <p className="factor-description">{description}</p>
      </div>
      <div className="factor-feedback">
        <p className="factor-direction">{direction}</p>
        <p className="factor-value">{value} years</p>
      </div>
    </li>
  )
}

export default Factor;
