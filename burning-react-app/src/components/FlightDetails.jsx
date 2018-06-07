import React, { Component } from 'react';
import '../App.css';
import '../Reservation.css';
import axios from 'axios';
import SeatMap from '../components/SeatMap.jsx'
import '../App.css'

function CreateTableHeader(){
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Flight</th>
        <th>From > To</th>
        <th>Plane</th>
      </tr>
    </thead>
  )
}

function DisplayFlightRow( props ) {
  return (
    <tbody key={ props.flight.flight_number }>
      <tr>
        <td>{ props.flight.flight_number }</td>
        <td>{ props.flight.flight_date }</td>
        <td>{ props.flight.origin }&nbsp;>&nbsp;{ props.flight.destination }</td>
        <td>{ props.flight.airplane.name }</td>
      </tr>
    </tbody>
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
