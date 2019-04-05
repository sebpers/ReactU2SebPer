import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import CardComponent from '../.././components/CardComponent';

// Handles the login when a user is selected or not
export default class User extends Component {
 styleDiv = {
   fontSize: '32px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%'
 }


  render() {
    const { match } = this.props;

    return (
      <div style={this.styleDiv}>
        <CardComponent>
          <h4 style={{padding: '5px'}}>
            {/* Show the user if it's selected otherwise redirect to login page */}
            { match.params.user ? `Selected user: ${match.params.user}` : <Redirect to='/login' /> }
          </h4>
        </CardComponent>
      </div>
    )
  }
}
