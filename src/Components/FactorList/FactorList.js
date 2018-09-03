// @flow

import React, { Component } from 'react';
import Factor from './Factor';
import './FactorList.css';

type Props = {
  factors: FactorsType
}

export default class Factors extends Component<Props> {
  static defaultProps = {
    factors: []
  }

  render() {

    const factors = this.props.factors;

    return (
      <div className="factors-wrapper">
        <h2>CREDIT FACTORS</h2>

        <ul className="factors-list">
          {factors.map((factor, i) => {
            return <Factor
              key={i}
              factor={factor}
            />
          })}

        </ul>
      </div>
    )
  }
}
