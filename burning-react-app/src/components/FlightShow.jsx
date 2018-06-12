import React, { Component } from 'react';
import axios from 'axios';
import SeatMap from '../components/SeatMap.jsx'
import '../App.css'

// const SERVER_URL = 'http://localhost:3000/flights';
const SERVER_URL = 'http://10.1.7.196:3000/flights';

class FlightShow extends Component {

  constructor( props ){
    super( props );

    this.state={
      flight: {}
    }
  }

  componentDidMount(){
    console.log(this.props.match.params);
    axios.get(`${SERVER_URL}/${this.props.match.params.id}.json`)
    .then(response => this.setState({flight: response.data}));


  }

  render () {



    return (
      <div>
        <h1></h1>

      </div>
    )
  }
}

export default FlightShow;
