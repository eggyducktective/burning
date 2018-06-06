import React, { Component } from 'react';
import axios from 'axios';
import SeatMap from '../components/SeatMap.jsx'
import '../App.css'

const SERVER_URL = 'http://localhost:3000/search.json';

class FlightDetails extends Component {

  constructor( props ){
    super( props );
  }

  render () {
    return (
      <div>
        <h1>This is in Flight Details</h1>
        {
          <p>{ this.props.flight.flight_date }</p>
        }
      </div>
    )
  }
}

export default FlightDetails;
