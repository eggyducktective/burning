import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

// const SERVER_URL_PREFIX = 'http://localhost:3000/';
const SERVER_URL_PREFIX = 'http://10.1.7.196:3000/';

function Seat(props) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const col = props.col;
  const alphaCol = alphabet[`${ props.col - 1 }`];
  let classToUse = props.seatClass;
  let aisleCol;

  if ( props.numCols === 2 ){
    aisleCol = 1;
  } else if ( props.numCols === 4 ){
    aisleCol = 2;
  } else if ( props.numCols === 6 ){
    aisleCol = 3;
  }

  return (
    <button type="button" className={ aisleCol === col ? classToUse += " aisleRight" : classToUse } disabled={ props.disabled } onClick={ props.selectSeat } value={ props.row + '-' + props.col }>
      Seat { props.row }{ alphaCol }<br />{ props.seatName }
    </button>
  )
}

class SeatMap extends Component {
  constructor( props ){
    super( props );
    this.state = {
      flightId: null,
      loginUser: this.props.userId,
      seatRow: null,
      seatCol: null
    }

    this._handleSeatPress = this._handleSeatPress.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSeatPress( event ){
    const seatSelected = event.target.value;
    const selectedRow = parseInt( seatSelected.split('-')[0] );
    const selectedCol = parseInt( seatSelected.split('-')[1] );
    this.setState({ flightId: this.props.flight.id, seatRow: selectedRow, seatCol: selectedCol });
  }


  _handleSubmit( event ){
    event.preventDefault();
    const reservationRecord = {
      user_id: this.state.loginUser,
      flight_id: this.state.flightId,
      row: this.state.seatRow,
      col: this.state.seatCol
    }
    this.props.processBooking( reservationRecord );
  }


  returnReservedSeatName = ( row, col, reservations ) => {
    let seatName = "AVAILABLE";

    for ( let currentRes = 0; currentRes < reservations.length; currentRes++ ){
      if ( row === reservations[currentRes].row && col === reservations[currentRes].col ){
        return `${ reservations[currentRes].user.name }`;
      }
    }
    return seatName;
  }

  createSeatMap = ( props ) => {
    const numRows = this.props.flight.airplane.rows;
    const numCols = this.props.flight.airplane.cols;
    const reservations = this.props.flight.reservations;

    let seatName;
    let seatClass;
    let seatDisabled;

    let seatMap = [];
    for ( let currentRow = 1; currentRow <= numRows; currentRow++ ){
      let seatRow = [];
      for ( let currentCol = 1; currentCol <= numCols; currentCol++ ){
        seatName = this.returnReservedSeatName( currentRow, currentCol, reservations );
        if ( seatName === "AVAILABLE" ){
          seatClass = "seat";
          seatDisabled = false;
        } else {
          seatClass = "seat booked";
          seatDisabled = true;
        }
        seatRow.push(<Seat key={ currentRow + " " + currentCol } row={ currentRow } col={ currentCol } numCols={ numCols } seatName={ seatName } seatClass={ seatClass } disabled={ seatDisabled } selectSeat={ this._handleSeatPress } />)
      }
      seatMap.push(<div key={ currentRow } >{ seatRow }</div>);
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
          <input type="submit" value="Save Your Reservation" className="saveButton" />
          { this.createSeatMap() }
        </form>
      </div>
    );
  }
}

export default SeatMap;
