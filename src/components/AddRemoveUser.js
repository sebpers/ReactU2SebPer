import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Handles input value - Add users and remove users
class AddRemoveUser extends Component {

  constructor(props) {
    super(props);

    // Holds the value from user input
    this.state = {
      value: ''
    }
  }

  addButtonStyle = {
    width: 100,
    padding: 10,
    backgroundColor: '#2db141',
    color: 'whitesmoke',
    border: 0,
    margin: '5px 0 15px 0',
    // eslint-disable-next-line no-dupe-keys
    width: '90%'
  }

  removeButtonStyle = {
    width: 100,
    padding: 10,
    backgroundColor: '#c71c3c',
    color: 'whitesmoke',
    border: 0,
    // eslint-disable-next-line no-dupe-keys
    width: '90%'
  }

  divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px'
  }

  inputStyle = {
    padding: 5,
    width: '90%',
    marginBottom: 10
  }

  // Makes it possible to type in input field
  // The key pressed gets into value
  handleChange = (event) => {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  // Add user and pass the value into app.js
  // If the value is not empty, pass the value into props.updateUserList in App.js
  addUser = (event) => {
    event.preventDefault();
    if (this.state.value !== '') {
      // Send values of null, value and true into the upDateList
      this.props.updateUserList(null ,this.state.value.toUpperCase(), true);
    }
  }

  // Remove one user when "remove" button is clicked
  // pass ONE amount of user(s) into poppedList in App.js
  removeUser = () => {
    this.props.poppedList(1);
  }

  render() {

    return (
      <div style={this.divStyle}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='new user..' style={this.inputStyle}/>

          <button type="submit" value="Add" style={this.addButtonStyle} onClick={this.addUser}>
           Add
          </button>

          <button style={this.removeButtonStyle} onClick={this.removeUser}>
           Remove
          </button>
      </div>
    )
  }
}

export default AddRemoveUser

AddRemoveUser.propTypes = {
  updateUserList: PropTypes.func,
  newListFromApp: PropTypes.array,
  poppedList: PropTypes.func
}