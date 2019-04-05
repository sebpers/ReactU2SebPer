import React, { Component } from 'react'

import CardComponent from '../.././components/CardComponent';

// Login screen, Has the login logic
export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  // Set key strokes to state.value
  handleChange = (event) => {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  // If the input is NOT empty, login and push as history to dashboard
  loginFunc = () => {
    if (this.state.value !== '') {
      return this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <CardComponent myInfo="You must click on the button to login">
          <div className="loginBackground">
            <input value={this.state.value} onChange={this.handleChange} placeholder="new user..."/>
            <button className="loginButton" onClick={this.loginFunc}>Login</button>
          </div>
        </CardComponent>
      </div>
    )
  }
}
