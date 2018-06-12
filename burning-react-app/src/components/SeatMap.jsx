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
      Seat { props.row }{ alphaCol } { props.seatName }
    </button>
  )
}

class SeatMap extends Component {
  constructor( props ){
    super( props );
    this.state={
      loginUser: 1
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }


  _handleSubmit( event ){
    event.preventDefault();
  
  }


  returnReservedSeatName = ( row, col, reservations ) => {
    console.log('row: ', row);
    console.log('col: ', col);
    console.log('props: ', reservations);
    let seatName = "AVAILABLE";

    for ( let currentRes = 0; currentRes < reservations.length; currentRes++ ){
      if ( row === reservations[currentRes].row && col === reservations[currentRes].col ){
        return reservations[currentRes].user_id;
      }
    }
    return seatName;
  }

  createSeatMap = ( props ) => {
    const numRows = this.props.flight.airplane.rows;
    const numCols = this.props.flight.airplane.cols;
    const reservations = this.props.flight.reservations;

    let seatName;
    let seatMap = [];
    for ( let currentRow = 1; currentRow <= numRows; currentRow++ ){
      let seatRow = [];
      for ( let currentCol = 1; currentCol <= numCols; currentCol++ ){
        seatName = this.returnReservedSeatName( currentRow, currentCol, reservations );
        seatRow.push(<Seat row={ currentRow } col={ currentCol } numCols={ numCols } seatName={ seatName }/>)
      }
      seatMap.push(<div>{ seatRow }</div>);
    }
    return seatMap;
  }

  _handleChange(event){
    this.setState({loginUser: event.target.value})
  }
  render () {
    return (
      <div className="seatMap">
        <form onSubmit={ this._handleSubmit }>
          { this.createSeatMap() }
          <input type="submit" value="Save Your Reservation" />
        </form>
      </div>
    );
  }
}

export default SeatMap;
