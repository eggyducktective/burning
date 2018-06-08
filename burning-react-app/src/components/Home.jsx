import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'



class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Welcome to Burning Airlines Service</h1>

          <li>Why not book a flight right now? You deserve it. <Link to="/flight"> Search for Flight</Link></li>
          
          {/* <li>Found your flight? Want to make a booking? <Link to="/reservation"> Book a Flight</Link></li> */}


      </div>
    );
  }
}
export default Home;
