import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

const SERVER_URL_PREFIX = 'http://localhost:3000/';

function Seat(props) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const col = props.col;
  const alphaCol = alphabet[`${ props.col - 1 }`];
  let aisleCol;

  if ( props.numCols === 2 ){
    aisleCol = 1;
  } else if ( props.numCols === 4 ){
    aisleCol = 2;
  } else if ( props.numCols === 6 ){
    aisleCol = 3;
  }

  return (
    <button className={ aisleCol === col ? "seat aisleRight" : "seat" } >
      Seat { props.row }{ alphaCol } Brendan
    </button>
  )
}

class SeatMap extends Component {
  constructor( props ){
    super( props );    
  }

  // Needed for axios
  componentDidMount(){
    // Put it in here - this will run AFTER the component mounts and has done a render() once
    let SERVER_URL = `${ SERVER_URL_PREFIX }/flightRes/${ this.props.flight.id }.json`;

    const getSingleFlightReservations = () => axios.get( SERVER_URL )
    .then( response => {
      this.setState({ flight: response.data });
    });
    getSingleFlightDetail();
  }
  
  createSeatMap = ( props ) => {
    const numRows = this.props.flight.airplane.rows;
    const numCols = this.props.flight.airplane.cols;

    let seatMap = [];
    for ( let currentRow = 1; currentRow <= numRows; currentRow++ ){
      let seatRow = [];
      for ( let currentCol = 1; currentCol <= numCols; currentCol++ ){
        seatRow.push(<Seat row={ currentRow } col={ currentCol } numCols={ numCols } />)
      }
      seatMap.push(<div>{ seatRow }</div>);     
    }
    return seatMap;
  }

  render () {
    return (
      <div className="seatMap">
        { this.createSeatMap() }
      </div>
    )
  }
}

export default SeatMap;
