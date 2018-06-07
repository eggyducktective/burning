import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

const SERVER_URL = 'http://localhost:3000/search.json';

function Seat(props) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alphaCol = alphabet[`${ props.col - 1 }`];

  return (
    <button className="seat">
      Seat { props.row }, { alphaCol }
    </button>
  )
}

class SeatMap extends Component {
  constructor( props ){
    super( props );
  }

  createSeatMap = ( props ) => {
    const numRows = this.props.flight.airplane.rows;
    const numCols = this.props.flight.airplane.cols;

<<<<<<< HEAD
    let seatMap = [];
    for ( let currentRow = 1; currentRow <= numRows; currentRow++ ){
      let seatRow = [];
      for ( let currentCol = 1; currentCol <= numCols; currentCol++ ){
        seatRow.push(<Seat row={ currentRow } col={ currentCol } />)
      }
      seatMap.push(<div>{ seatRow }</div>);     
    }
    return seatMap;
=======
    this.state = {
      flights: []
    }
>>>>>>> 829d8b45ff231332989037bc4e69a7e9819334ae
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
