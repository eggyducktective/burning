import React, { Component } from 'react';
import axios from 'axios';
import FlightDetails from '../components/FlightDetails.jsx'
import SeatMap from '../components/SeatMap.jsx'
import '../App.css'

const SERVER_URL_PREFIX = 'http://localhost:3000/flights';

class Reservation extends Component {

  constructor( props ){
    super( props );

    this.state = {
      flight: []
    }
  }

  // Needed for axios
  componentDidMount(){
    // Put it in here - this will run AFTER the component mounts and has done a render() once
    const SERVER_URL = `${ SERVER_URL_PREFIX }/${ this.props.match.params.id }.json`;

    const getSingleFlightDetail = () => axios.get( SERVER_URL )
    .then( response => {
      this.setState({ flight: response.data });
    });

    getSingleFlightDetail();
  }

  render () {
    return (
      <div>
        <h1>This is in Reservation</h1>
        <FlightDetails
          flight={ this.state.flight }
        />
        <SeatMap />
      </div>
    )
  }
}

export default Reservation;
