import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Handles link navigation to different screens
class Navbar extends Component {
  render() {
    const divStyle = {
      backgroundColor: '#25c692',
      width: '400px',
      height: '100vh'}

    const linkStyle = {
      textDecoration: 'none',
      fontSize: '32px',
      marginTop: '400px'
    }

    const ulStyle = {
      marginTop: '200px'
    }

    /* Redirect do a screen when link is clicked */
    return (
        <div style={divStyle}>
          <nav style={ulStyle}>
            <ul>
              <li>
                <NavLink activeClassName='is-active' exact={true} style={linkStyle} to="/">Login</NavLink>
              </li>
              <li>
                <NavLink activeClassName='is-active' style={linkStyle} to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink activeClassName='is-active' style={linkStyle} to="/user">User</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    )
  }
}
export default Navbar