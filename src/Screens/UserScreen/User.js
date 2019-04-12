import React, { Component } from 'react'
import CardComponent from '../.././components/CardComponent';
import { Redirect } from 'react-router-dom';

// Handles the login when a user is selected or not
export default class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: [{}],
      toggleInfo: false
    }
  }

 styleDiv = {
   fontSize: '32px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%'
 }

 componentDidMount() {
    if (this.props.match.params.id !== undefined) {
    fetch(`http://api.softhouse.rocks/users/${this.props.match.params.id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({user: data});
    });
  }
}

  // Toggle true or false in state.toggleInfo
  toggleInfo = () => {
    this.setState({toggleInfo: !this.state.toggleInfo});
  }

  render() {

    const info = this.state.toggleInfo ? 'Hide address' : 'Show address';

    return (
      <div style={this.styleDiv}>
        <CardComponent>
          <img src="https://placekitten.com/250/250" alt="Small turtle colored cat" /> <br />

          {this.props.match.params.id ? <h6>{this.state.user.name}</h6> : <Redirect from='/user' to='/login'/>}
          <h6>
            {this.state.user.username} <br />
            {this.state.user.email} <br />
          </h6>

            {this.state.user.address && this.state.toggleInfo &&
              <div>
                <h6 style={{padding: '5px'}}>
                  {this.state.user.address.city} <br />
                  {this.state.user.address.street} <br />
                  {this.state.user.address.suite} <br />
                </h6>
              </div>
            }

           <button onClick={this.toggleInfo}>{info}</button>
        </CardComponent>
      </div>
    )
  }
}
