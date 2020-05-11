import  React ,{createContext,useState,useEffect} from 'react';

export const UserContext = createContext();

// ADD_USER
// UPDATE PROFILE
// GET_USER
// LOGIN
const intialstate = []



// const reducer = (state, action) => {
// switch(action.type) {
//   case "GET_USERS":
//     return {}
// }
// }


const UserContextProvider = (props) => {
  
  const [data, setData] =useState(intialstate)

  useEffect(()=> {
    fetch('http://localhost:5000/api/profile/freelancers')
    .then((response)=>{
   return response.json()
 }).then((data)=>{
   setData(data)
 }).catch((err)=>{
   console.log(err)
 })
  },[])

  return (
    <UserContext.Provider value ={{data,setData}}>
      {props.children}
    </UserContext.Provider>
    );
}
 
export default UserContextProvider ;