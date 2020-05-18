import React from 'react';
import useForm from '../../utils/useForm';
import {setUserSession} from '../../utils/sessionAuth';
import axios from "axios";

const UserLogin = (props) => {
const [value,handlechange] = useForm()
 const  handlesubmit = (e) => {
   e.preventDefault()
   axios.post('http://localhost:5000/api/user/login',value)
   .then((res)=> {
     const {token,userId} = res.data
    setUserSession(token, userId.firstName);
    props.history.push('/');
   })
   .catch((err)=>console.log(err))

}

  return ( 
    <div> 
      <form onSubmit={handlesubmit} >
       Login<br /><br />
      <div>
        Username<br />
        <input type="text" value={value.username || ""} name="username" onChange = {handlechange} />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" value={value.password || ""} name="password" onChange = {handlechange}  />
      </div>
      <div style={{ marginTop: 10 }}>
      <input type="submit" className="btn btn-primary" />
      </div>
      </form>
     
    </div>
   );
}
 
export default UserLogin;