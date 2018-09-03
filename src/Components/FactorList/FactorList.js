import React, { Component } from 'react';
import Factor from './Factor';
import './FactorList.css';

export default class Factors extends Component {


  render() {
    const factors = [ 'creditAge', 'totalAccounts', 'creditUtilization', 'missedPayments', 'newAccounts' ]

    return (
      <div className="factors-wrapper">
        <h2>CREDIT FACTORS</h2>

        <ul className="factors-list">
          {factors.map((factor) => {
            return <Factor
              name={factor.name}
              statistic={factor.statistic}
              rating={factor.rating}
            />
          })}

        </ul>
      </div>
    )
  }
}
