import React, { Component } from 'react';
import './App.css';
import Reservation from './components/Reservation.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to Burning Airlines</h1>
          <Reservation />
        </header>
      </div>
    );
  }
}

export default App;
