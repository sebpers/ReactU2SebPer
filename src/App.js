import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar';
import Dashboard from './Screens/DashboardScreen/Dashboard';
import Login from './Screens/LoginScreen/Login';
import User from './Screens/UserScreen/User';
import Error from './components/Error';


// Handles the view - Update the app each time the state changes
// Also handles the logic to add and remove a user from userList
class App extends Component {


  render() {
    return (
      <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user/:user" component={User} />
        <Route path="/user" exact component={User} />
        <Route component={Error}/>
        </Switch>

      </Router>
      </div>
    );
  }
}

export default App;
