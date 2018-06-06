import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/search.json';

class SeatMap extends Component {

  constructor( props ){
    super( props );

    this.state = {
      flights: []
    }    
  }

  render () {
    return (
      <div>
        <h1>This is in SeatMap</h1>
      </div>
    )
  }
}

export default SeatMap;