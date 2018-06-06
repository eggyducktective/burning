import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/search.json';

class FlightSearchForm extends Component {

  constructor( props ){
    super( props );

    this.state = {
      flights: [],
      originDestination: []
    }

    this._handleChange = this._handleChange.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  getOriginDestinationList(){
    console.log('in here', this.state.flights);
    const tempArray = [];
    for( let key in this.state.flights ) {
      const flight = this.state.flights[ key ];
      const originDestination = `${ flight.origin } > ${ flight.destination }`;
      tempArray.push( originDestination );
      console.log( 'origin & dest: ', originDestination );
    }
    console.log('after setting state temp array: ', tempArray );
    this.setState({ originDestination: tempArray });
    console.log('after setting state: ', this.state.originDestination );
    
  }

  // Needed for axios
  componentDidMount(){    
    // Put it in here - this will run AFTER the component mounts and has done a render() once    
    const fetchFlights = () => axios.get( SERVER_URL )
    .then( response => {
      this.setState({ flights: response.data });
      this.getOriginDestinationList();
    });

    fetchFlights();
  }

  _handleSubmit( event ){
    event.preventDefault();
    // console.log( this.state.content );
    this.props.reportSecret( this.state.content );
  }

  _handleChange( event ){
    // console.log( event.target.value );
    this.setState({ content: event.target.value });
  }

  render () {
    return (
      <form onSubmit={ this._handleSubmit }>
        <label htmlFor="origin">Origin: </label>
        <select>
          {
          this.state.flights.length && this.state.flights.map( f => <option key={ f.id } value={ f.id } >{ f.origin }</option> )
          }
        </select>
        &nbsp;&nbsp;
        <label htmlFor="origin">Destination: </label>
        <select>
          {
          this.state.flights.length && this.state.flights.map( f => <option key={ f.id } value={ f.id } >{ f.destination }</option> )
          }
        </select>
        &nbsp;&nbsp;
        <input type="submit" value="Search for Flights"/>

        <br />
        <br />
      </form>   
    );
  }
}

export default FlightSearchForm;