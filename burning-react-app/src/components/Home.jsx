import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


class Home extends Component {
  render(){
    return(
      <div>
        <h1>Welcome to Burning Airlines Service</h1>
          <li>Why not book a flight right now? You deserve it. <Link to="/flight"> Flight Booking</Link></li>
      </div>
    );
  }
}
export default Home;
