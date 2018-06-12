import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import CreateFlightSearchResultsTable from './CreateFlightSearchResultsTable.jsx';

// const SERVER_URL = 'http://localhost:3000/search.json';
const SERVER_URL = 'http://10.1.7.196:3000/search.json';


class FlightSearch extends Component {

  constructor(){
    super();

    this.state = {
      flights: [],
      originList: [],
      destinationList: [],
      origin: '',
      destination: '',
      searchResults: null
    }

    this._handleOriginChange = this._handleOriginChange.bind( this );
    this._handleDestinationChange = this._handleDestinationChange.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  setOriginList(){
    for( let key in this.state.flights ){
      const origin = this.state.flights[ key ].origin;
      // If origin is new add it to the origins array in state
      if( !this.state.originList.includes ( origin ) ){
        this.setState(prevState => ({
          originList: [...prevState.originList, origin]
        }));
      }
    }
    // Set initial origin in case form is submitted before the user makes a change
    this.setState({ origin: this.state.originList[0] });
  }

  setDestinationList(){
    for( let key in this.state.flights ){
      const destination = this.state.flights[ key ].destination;
      // If destination is new add it to the destinations array in state
      if( !this.state.destinationList.includes ( destination ) ){
        this.setState(prevState => ({
          destinationList: [...prevState.destinationList, destination]
        }));
      }
    }
    // Set initial destination in case form is submitted before the user makes a change
    this.setState({ destination: this.state.destinationList[0] });
  }

  // Needed for axios
  componentDidMount(){
    // Put it in here - this will run AFTER the component mounts and has done a render() once
    const fetchFlights = () => axios.get( SERVER_URL )
    .then( response => {
      this.setState({ flights: response.data });
      this.setOriginList();
      this.setDestinationList();
    });

    fetchFlights();
  }

  _handleSubmit( event ){
    event.preventDefault();
    const originToFind = this.state.origin;
    const destinationToFind = this.state.destination;
    const searchResults2 = [];

    // Run through all flights and construct matching list
    for (let i = 0; i < this.state.flights.length; i++) {
      const flight = this.state.flights[i];
      if ( flight.origin === originToFind && flight.destination === destinationToFind ){
        searchResults2.push( flight );
      }
    }


    this.setState({ searchResults: searchResults2 });
  }

  _handleOriginChange( event ){
    this.setState({ origin: event.target.value });
  }

  _handleDestinationChange( event ){
    this.setState({ destination: event.target.value });
  }

  render () {
    return (
      <div className="form">
      <form onSubmit={ this._handleSubmit }>

        <label htmlFor="origin">Origin: </label>
        <select onChange={ this._handleOriginChange } >
          {
          this.state.originList.length && this.state.originList.map( f => <option key={ f }>{ f }</option> )
          }
        </select>
        &nbsp;&nbsp;
        <label htmlFor="destination">Destination: </label>
        <select onChange={ this._handleDestinationChange } >
          {
          this.state.destinationList.length && this.state.destinationList.map( f => <option key={ f }>{ f }</option> )
          }
        </select>
        &nbsp;&nbsp;
        <input type="submit" value="Search for Flights"/>
        </form>

        <br />
        <br />

        <CreateFlightSearchResultsTable searchResults={ this.state.searchResults } origin={this.state.origin} destination={this.state.destination} />

      </div>
    );
  }
}

export default FlightSearch;
