import React, { Component } from 'react';
import '../App.css';
import '../Reservation.css';
import axios from 'axios';
import SeatMap from '../components/SeatMap.jsx' 

function CreateTableHeader(){
  return (
    <thead>
      <tr>
        <td>Date</td>
        <td>Flight</td>
        <td>From > To</td>
        <td>Plane</td>
      </tr>
    </thead>
  )
}

function DisplayFlightRow( props ) {
  return (
    <tr key={ props.flight.flight_number }>
      <td>{ props.flight.flight_number }</td>
      <td>{ props.flight.flight_date }</td>
      <td>{ props.flight.origin }&nbsp;>&nbsp;{ props.flight.destination }</td>
      <td>{ props.flight.airplane.name }</td>
    </tr>
  )
}

class FlightDetails extends Component {
  constructor( props ){
    super( props );    
  }

  render () {
    return (
      <div className="flightDetails">
        <table className="searchResults flightDetailsTable">
          <CreateTableHeader />
          <DisplayFlightRow flight={ this.props.flight } />
        </table>
      </div>
    )
  }
}

export default FlightDetails;