import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../FlightSearch.css'

class CreateFlightSearchResultsTable extends Component {
  constructor(props){
    super(props);
  }

  userDetails = {
    loginUser: 1
  }

  render(){
    return(
      <div>
      {
        this.props.searchResults !== null && this.props.searchResults.length ?
        <table className="searchResults flightSearchTable">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Date</th>
              <th>Origin</th>
              <th>Destination</th>
            </tr>
          </thead>
          {
          this.props.searchResults !== null && this.props.searchResults.map((flight, index) => (
          <tbody key={ index }>
          <tr>
            <td><Link to={`/reservation/${flight.id}/${ this.userDetails.loginUser }`}>{ flight.flight_number }</Link></td>
            <td>{ flight.flight_date }</td>
            <td>{ flight.origin }</td>
            <td>{ flight.destination }</td>
          </tr>
          </tbody>
          ))}
        </table>
        :
        <div>
        {
          this.props.searchResults !== null  ?  <h3>No Flights From {this.props.origin} To {this.props.destination} </h3> : <h3>Please choose Origin and Destination and Click Search</h3>
        }
        </div>
      }
      </div>
    );
  }
}
export default CreateFlightSearchResultsTable
