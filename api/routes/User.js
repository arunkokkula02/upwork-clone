const express = require('express');
const Router = express.Router();
const User = require('../../models').User;
const Profile = require('../../models').Profile;

// Create user
Router.post('/',(req,res) => {
  return User.create(req.body)
  .then((createdUser) => {
    Profile.create({userId:createdUser.id})
    return res.status(201).json(createdUser)
   
  })
  .catch((err) => {
    return res.status(400).json({message:err.message})
  })
})

// Get a spefific user
Router.get('/:id',(req,res) => {
  return User.findByPk(req.params.id).then(user => {
    res.status(200).json(user)
  })
})

// update user
Router.put('/user/:id',(req,res) => {
 return User.update(req.body,{
   where:{
     id:req.params.id
   }})
   .then(()=>{
     return res.status(200).json({message:"Record updated"})
   }).catch((err) => {
     return res.status(400).json({message:err.message})
   })
})


module.exports = Router;


