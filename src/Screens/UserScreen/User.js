import React, { useEffect, useState } from 'react'
import withHTTPrequest from '../../HOC/withHTTPrequest';

// Handles the login when a user is selected or not
function User( {getUser} ) {
  // Set new states value in Object
  const [user, setUser] = useState(Object);
  const [trueFalse, setTrueOrFalse] = useState(true);

 const styleDiv = {
   fontSize: '32px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%'
 }

 // Get user as soon as possible
 useEffect(() => {
      getUser().then((response) => {
        return response.json();
      })
      .then((data) => {
        // Set new user state Object
        setUser(data);
      })
 }, []);


    // Toggle true or false in state.toggleInfo
    const toggleInfo = () => {
      setTrueOrFalse(!trueFalse);
    }

    // Logic for toggle info button
    const info = trueFalse ? 'Hide address' : 'Show address';

    return (
      <div style={styleDiv}>
          <img src="https://placekitten.com/250/250" alt="Small turtle colored cat" /> <br />
          <h6>
            {user.username} <br />
            {user.email} <br />
          </h6>

          {user.address && trueFalse &&
            <div>
              <h6 style={{padding: '5px'}}>
                {user.address.city} <br />
                {user.address.street} <br />
                {user.address.suite} <br />
              </h6>
            </div>
          }

          <button onClick={toggleInfo}>{info}</button>
      </div>
    )
  }

  // Send user function to withHTTPrequest and get access to withHTTPrequest information
  export default withHTTPrequest(User)