import React, { Component } from 'react';
import axios from 'axios';

import FlightSearchForm from '../components/FlightSearchForm.jsx'

// Needed for axios
const SERVER_URL = 'http://localhost:3000/search.json';

class FlightSearch extends Component {

  constructor(){
    super();

    this.state = {
      flights: []
    }
  }

  componentWillMount(){
    // Runs before the first render
  }

  componentDidMount(){    
    // Put it in here - this will run AFTER the component mounts and has done a render() once    
    const fetchFlights = () => axios.get( SERVER_URL )
    .then( response => {
      this.setState({ flights: response.data });
    });

    fetchFlights();
  }

  render () {
    return (
      <div className="App">
        <h1>Flight Search Results</h1>
        {/* <FlightSearchForm reportSecret={ this.saveSecret }/> */}        
        <FlightSearchForm flights={ this.state.flights } />
          <ul>
          {
            this.state.flights.length && this.state.flights.map(
              f => <li key={ f.id } >{ f.flight_number } { f.flight_date } { f.origin } { f.destination } { f.plane } </li>
            )
          }
          </ul>
    </div>
    );
  }
}

export default FlightSearch; 