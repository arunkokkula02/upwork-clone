import React from 'react';
import {getUser,removeUserSession} from '../../utils/sessionAuth';


const Home = (props) => {

  const handleLogout = (e) => {
    removeUserSession()
    props.history.push('/login');
  }

  const user = getUser()
  return ( 
    <div>
      <h2>Welcome {user} </h2>
      <input type="button" onClick={handleLogout} value="Logout"/>
    </div>
   );
}
 
export default Home;
