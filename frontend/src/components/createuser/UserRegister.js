import  React,{useState} from 'react';
import useForm from '../../utils/useForm';
const UserRegister = (props) => {

const [user,handlechange] = useForm();

const handleSubmit = (e) => {
  e.preventDefault()
if(user.password !== user.confirmPassword){
  console.log("Password did not match")
}else{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  fetch('http://localhost:5000/api/user', requestOptions)
  .then((response) => {
    console.log("Sucess:",response)
    props.history.push('/login')
})
  
  .catch((err) => console.log("error:",err));
  
}

}

  return ( 
<div  style={{width:400 +"px"}}>
<form onSubmit = {handleSubmit}>
      <div className="form-group">
      <label>Firstname</label>
      <input 
      type="text" 
      className="form-control" 
      value={user.firstName || ""} 
      name="firstName" 
      onChange={handlechange}/>
      </div>

      <div className="form-group" >
      <label>Lastname</label>
      <input 
      type="text" 
      className="form-control" 
      value ={user.lastName || ""} 
      name="lastName" 
      onChange={handlechange}/>
      </div>

      <div className="form-group" >
      <label>Email</label>
      <input 
      type="text" 
      className="form-control" 
      value ={user.email || ""} 
      name="email"  
      onChange={handlechange}/>
      </div>

      <div className="form-group" >
      <label>Username</label>
      <input 
      type="text" 
      className="form-control" 
      value ={user.username || ""} 
      name="username" 
      onChange={handlechange}/>
      </div>

      <div className="form-group">
      <label>
          Register as:
          <select value={user.isFreelancer || "" } onChange={handlechange}>
            <option value= {user.isFreelancer || ""}>Freelancer</option>
            <option value={user.isFreelancer || ""}>Employer</option>
            
          </select>
        </label>
      </div>

      <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" value ={user.password || ""} 
       name="password" onChange={handlechange}/>
      </div>

      <div className="form-group">
      <label>Confirm Password</label>
      <input type="password" className="form-control" value= {user.confirmPassword || ""} 
      name="confirmPassword"  onChange={handlechange}/>
      </div>
      
      <input type="submit" className="btn btn-primary"/>
      
    </form>
</div>
    
   );
}
 
export default UserRegister;