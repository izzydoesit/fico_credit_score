import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '743',
      rating: 'excellent'
    }
  }

  render() {
    return(
      <div className="score-wrapper">

        <h1>{this.state.score}</h1>
        <p>{this.state.rating.toUpperCase()}</p>
      </div>
    )
  }
}
