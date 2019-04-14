import React, { Component } from 'react';

// Holds user information from server
export default function withHTTPrequest(WrappedComponent) {
  return class extends Component {

    // Fetching user ID from server
    getUser = () => {
      return fetch(`http://api.softhouse.rocks/users/${this.props.userId}`)
    }

    // Put user list in each component that gets wrapped
    render() {
      return <WrappedComponent getUser={this.getUser}/>
    }
  };
}