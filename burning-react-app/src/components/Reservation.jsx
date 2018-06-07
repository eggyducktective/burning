import React, { Component } from 'react';
import axios from 'axios';
import FlightDetails from '../components/FlightDetails.jsx'
import SeatMap from '../components/SeatMap.jsx'
import '../App.css'
import '../Reservation.css'

const SERVER_URL_PREFIX = 'http://localhost:3000';

class Reservation extends Component {
  constructor( props ){
    super( props );

    this.state = {
      flight: {}
    }
  }

  // Needed for axios
  componentDidMount(){
    // Put it in here - this will run AFTER the component mounts and has done a render() once
    let SERVER_URL = `${ SERVER_URL_PREFIX }/flights/${ this.props.match.params.id }.json`;

    const getSingleFlightDetail = () => axios.get( SERVER_URL )
    .then( response => {
      console.log( response.data );
      this.setState({ flight: response.data });
    });
    getSingleFlightDetail();
  }

  render () {
    console.log('state: ', this.state.flight );
    let content;
    if( this.state.flight.id ){
      content = (
        <div>
          <FlightDetails flight={ this.state.flight } />
          <SeatMap flight={ this.state.flight } />
        </div>
      )
    } else {
      content = <p>Loading flight details...</p>;
    }

    return (
      <div>
        <h1>Burning Airlines</h1>
        { content }
      </div>
    )
  }
}

export default Reservation;
