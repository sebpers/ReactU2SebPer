import React, { Component } from 'react'

// Error page will show if URL content doesn't exist
export default class Error extends Component {
  render() {
    return (
      <div>
        <h1>The page you're looking for does not exist</h1>
      </div>
    )
  }
}
