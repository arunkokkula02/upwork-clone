import React,{useContext} from 'react';
import {UserContext} from '../context/UserConext';



const User = () => {
  const {data}= useContext(UserContext)
  console.log(data);

  return ( 
    <div>
      
    </div>
   );
}
 
export default User;