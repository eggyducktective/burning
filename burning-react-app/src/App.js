import React, { Component } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to Burning Airlines</h1>
          <FlightSearch />
        </header>
      </div>
    );
  }
}

export default App;
