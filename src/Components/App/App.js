import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Score from '../Score/Score'
import FactorList from '../FactorList/FactorList'
import TipList from '../TipList/TipList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Score />
        <FactorList />
        <TipList />
      </div>
    );
  }
}

export default App;
