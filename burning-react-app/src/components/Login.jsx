import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
import axios from 'axios';

const USER_URL = 'http://localhost:3000/users.json'

class Login extends Component {

  constructor(){
    super();
    this.state={

      user_name: '',
      user_id: '',
      loginFormPassword: '',
      loginFormUser: '',
      users: []

    }
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNameChange( event ) {
    this.setState({ user_name: event.target.value});
  }
  _handlePasswordChange( event ) {
    this.setState({ loginFormPassword: event.target.value});
  }


  componentDidMount(){
    const fetchUserData = () => {
      axios.get(USER_URL).then(response => {
        console.log('resonse:', response.data);
        this.setState({users: response.data});
      });
    };
    fetchUserData();
    console.log(this.state.users);
  }

  _handleSubmit( event ){

    event.preventDefault();
    const name = this.state.user_name;
    const password = this.state.loginFormPassword;
//     console.log('name: ', name);
// console.log('password: ', password);

    for (let i = 0; i < this.state.users.length; i++) {
      const user = this.state.users[i];
      if( user.name === name && password === 'chicken' ) {
        this.setState({user_id: this.state.loginFormUser, user_name: user.name});
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
