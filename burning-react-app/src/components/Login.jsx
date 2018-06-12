import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
import axios from 'axios';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      loginFormUserName: '',
      loginFormPassword: '',
      user_id: '',
      user_name: '',
      listOfUsers: []
    }
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNameChange( event ) {
    this.setState({ loginFormUserName: event.target.value });
  }

  _handlePasswordChange( event ) {
    this.setState({ loginFormPassword: event.target.value });
  }

  componentDidMount(){
    const USER_URL = 'http://localhost:3000/users.json';

    const fetchUserList = () => {
      axios.get(USER_URL)
      .then(response => {
        this.setState({ listOfUsers: response.data });
      });
    };

    fetchUserList();
  }

  _handleSubmit( event ){
    event.preventDefault();
    const user_name = this.state.loginFormUserName;
    console.log( 'user_name: ', user_name );
    
    const password = this.state.loginFormPassword;
    console.log( 'password: ', password );

    for (let currentUser = 0; currentUser < this.state.listOfUsers.length; currentUser++) {
      const userRecord = this.state.listOfUsers[ currentUser ];
      
      if( userRecord.name === user_name && password === 'chicken' ) {
        this.setState({ user_id: userRecord.id });
        this.props.history.push("/") // pass the props down
      }
    }
  }

  render(){
    return(
      <div className="form">
        <form onSubmit={ this._handleSubmit }>
          <label htmlFor="name">User Name: </label>
          <input type="text" name="name" onChange={this._handleNameChange}/>
          <br/>
          <br/>
          <label htmlFor="name">Password: </label>
          <input type="password" name="password" onChange={this._handlePasswordChange}/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}

export default Login;
