import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import './Score.css';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '743', // stubbed, intent to set from incoming props
      rating: 'excellent' // calculation based on what range score falls into
    }
  }

  render() {
    return(
      <div className="score-wrapper">

        <h1 className="score">{this.state.score}</h1>
        <p className="rating">{this.state.rating.toUpperCase()}</p>
        <p className="score-exp">You have excellent credit and your credit ranks in the top 25% percentile</p>
      </div>
    )
  }
}
