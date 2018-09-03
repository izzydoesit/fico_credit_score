import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from '../NavBar/NavBar'
import Score from '../Score/Score'
import Factors from '../FactorList/FactorList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Score />
        <Factors />
      </div>
    );
  }
}

export default App;
