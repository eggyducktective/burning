import React, { Component } from 'react';
import axios from 'axios';
import FlightDetails from '../components/FlightDetails.jsx'
import SeatMap from '../components/SeatMap.jsx'
import '../App.css'
import '../Reservation.css'

// const SERVER_URL_PREFIX = 'http://localhost:3000';
const SERVER_URL_PREFIX = 'http://10.1.7.196:3000';

class Reservation extends Component {
  constructor( props ){
    super( props );

    this.state = {
      flight: {},
      user_id: this.props.match.params.user_id,
      created: null
    }

    this.saveReservation = this.saveReservation.bind( this );
  }

  saveReservation( reservation ){
    const SERVER_URL = `${ SERVER_URL_PREFIX }/reservation.json`;

    axios.post( SERVER_URL, { 
      user_id: reservation.user_id,
      flight_id: reservation.flight_id,
      row: reservation.row,
      col: reservation.col
    })
    .then( response => {
      const createTime = new Date();
      this.setState({ created: createTime });
    });
  }

  // Needed for axios
  componentDidMount(){
    // Put it in here - this will run AFTER the component mounts and has done a render() once
    let SERVER_URL = `${ SERVER_URL_PREFIX }/flights/${ this.props.match.params.id }.json`;

    const getSingleFlightDetail = () => axios.get( SERVER_URL )
    .then( response => {
      this.setState({ flight: response.data });
    });

    getSingleFlightDetail();
    setInterval( getSingleFlightDetail, 1000 );
  }

  render () {
    let content;
    if( this.state.flight.id ){
      content = (
        <div>
          <FlightDetails flight={ this.state.flight } />
          <SeatMap flight={ this.state.flight } processBooking={ this.saveReservation } userId={ this.state.user_id } />
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
