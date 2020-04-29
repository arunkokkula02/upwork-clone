const express = require('express');
const User = require('./models').User;
const app = express();

// app.post('/',(req,res) => {
//   return User.cre
// })

User.create({firstName:'Caleb',lastName:'Osano',email:'caleb.osano@gmail.com'})
.then((user)=>console.log(user))
.catch((err)=>console.log(err));