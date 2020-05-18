import {useState}  from 'react';

//Custom hook useForm
const useForm = (initialValue) => {
  const [value,setValue] = useState({})

  const  handlechange = (e) => {
    e.persist()
    setValue(value =>({...value,[e.target.name]:e.target.value}));
  }
return [value,handlechange];
}
 
export default useForm;
