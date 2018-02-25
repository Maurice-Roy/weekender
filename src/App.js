import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import PaintingContainer from './components/PaintingContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PaintingContainer />
      </div>
    );
  }
}

export default App;
