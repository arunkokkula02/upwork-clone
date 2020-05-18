import  React ,{createContext,useState,useReducer,useEffect} from 'react';

export const UserContext = createContext();

// ADD_USER
// UPDATE PROFILE
// GET_USER
// LOGIN
const intialstate = {
  isLoading:false,
  data:[],
  err:''
  }



const reducer = (state, action) => {
switch(action.type) {
  case "FETCH_SUCCESS":
    return {
      isLoading:false,
      data:action.payload,
      err:''
    }
  case "IS_LOADING":
    return {
      isLoading:true,
      data:[],
      err:''
    }
  case "FETCH_ERROR":
    return {
      isLoading:false,
      data:[],
      err:action.err
    }
    default:
      return state
}
}
const UserContextProvider = (props) => {
  
  const [state, dispatch] =useReducer(reducer,intialstate);

   useEffect(()=> {
    fetch('/api/profile/freelancers')
    .then((response)=> response.json())
    .then((data) => {
      return dispatch({type:'FETCH_SUCCESS',payload:data})
    })
    .catch((err)=>{
      return dispatch({type:'FETCH_ERROR',err:err})
    })
  },[])

  useEffect(()=> {
  fetch('')
  })

  return (
    <UserContext.Provider value ={{state}}>
      {props.children}
    </UserContext.Provider>
    );
}
 
export default UserContextProvider ;