import React, { Component } from 'react'
import CardComponent from '../../components/CardComponent';
import User from './User';

 // Render clicked user
 class showUser extends Component {

  render() {
    return (
      <div>
        <CardComponent>
         <User userId={this.props.match.params.id}/>
        </CardComponent>
      </div>
    )
  }
}
export default showUser;