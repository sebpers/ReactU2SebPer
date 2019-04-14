import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Navbar from './components/Navbar';
import Dashboard from './Screens/DashboardScreen/Dashboard';
import Login from './Screens/LoginScreen/Login';
import showUser from './Screens/UserScreen/showUser';
import Error from './components/Error';


// Handles the view - Update the app each time the state changes
// Also handles the logic to add and remove a user from userList
class App extends Component {

  Redirect = () => {
    return <Redirect to='/login' />
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/user/:id" exact component={showUser} />
          <Route path="/user" exact component={this.Redirect} />
          <Route component={Error}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
