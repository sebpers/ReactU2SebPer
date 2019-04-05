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
      userList:
      [
        {id: 1, name: 'Mimmi', isActive: true},
        {id: 2, name: 'Kalle', isActive: false},
        {id: 3, name: 'Klara', isActive: true},
        {id: 4, name: 'John', isActive: true},
        {id: 5, name: 'Stina', isActive: false}
      ]
    }
  }

  /*
  * Handles input from AddRemoveUser component
  * Takes the input from AddRemoveUser component and concat the state.userList
  * with the input to a new array
  * Sets state.userList to the "updated" list
  */
  updateUserList = (id, name, isActive) => {
    let newUserList = this.state.userList.concat({id, name, isActive});
    this.setState({userList: newUserList, isActive: true});
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
