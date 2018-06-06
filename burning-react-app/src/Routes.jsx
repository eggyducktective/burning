import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';


import Home from './components/Home.jsx';
import FlightSearch from './components/FlightSearch.jsx';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/flight" component={ FlightSearch } />
    </div>
  </Router>
);

export default Routes;
