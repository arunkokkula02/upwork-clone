const express = require('express');
const User = require('./models').User;
const app = express();
33
// app.post('/',(req,res) => {
//   return User.cre
// })

// User.create({firstName:'Caleb',lastName:'Osano',email:'caleb.osano@gmail.com'})
// .then((user)=> {
//   user.createProfile({phoneno:'0708613100',avatar:'avatar'})
// }).then(()=>console.log("worked"))
// .catch((err)=>console.log(err));

User.create({firstName:'Emmanuel',lastName:'Chirchir',email:'emmanue.chirchir@gmail.com'})
.then((user)=>console.log(user))
.catch((err)=>console.log(err));


