import React, { Component } from 'react'

import UserListComponent from '../.././components/UserListComponent';
import AddRemoveUser from '../.././components/AddRemoveUser';
import CardComponent from '../.././components/CardComponent';


// Handles the main logic with update the list and remove users and pass info to children, "owns" the user list
export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeUser: [],
      inactiveUser: [],
      userList: []
    }
  }

  /*
  * Handles input from AddRemoveUser component
  * Takes the input from AddRemoveUser component and concat the state.userList
  * with the input to a new array
  * Sets state.userList to the "updated" list
  */
  updateUserList = (id, name, isActive) => {
    let newUserList = this.state.userList.concat({name, isActive});
    this.setState({userList: newUserList, isActive: true});
  }

  componentDidMount() {

    fetch('http://api.softhouse.rocks/users')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({userList: data})
    });
  }

  /*
  * Takes an the hard coded input from AddRemoveUser component and use it to remove user from list
  * Takes the input and use it in the slice method to make a copy of the array
  * And remove one user from the list
  * Takes the new list and updated the state.userList
  */
  poppedList = (pop) => {
    let poppedList = this.state.userList.slice(0, -pop);
    this.setState({userList: poppedList});
  }

  render() {

    return (
      <div className="cardSpace">
         <CardComponent>
            <UserListComponent newListFromApp={this.state.userList}/>
          </CardComponent>

          <CardComponent>
            <AddRemoveUser updateUserList={this.updateUserList} newListFromApp={this.state.userList} poppedList={this.poppedList}/>
          </CardComponent>
      </div>
    )
  }
}
