// @flow

// @flow

import React, { Component } from 'react';
import Tip from './Tip';
import './TipList.css';

type Props = {
  tips: TipsType,
};
export default class TipList extends Component<Props> {

  render() {

    const tips = this.props.tips;

    return (
      <div className="tip-list-wrapper">
        <h2>TIPS TO IMPROVE CREDIT</h2>
        <ul className="tip-list">
          {tips.map((tip, i) => {
            return <Tip key={i} tip={tip} />
          })}
        </ul>
      </div>
    )
  }
}