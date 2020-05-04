const express = require('express');
const Router = express.Router();
const Profile = require('../../models').Profile;

//Create Profile
Router.put('/freelancer/:id',(req,res) => {
  return Profile.update(req.body,{
    where:{
      id:req.params.id
    }})
    .then(()=>{
      return res.status(200).json({message:"Record updated"})
    }).catch((err) => {
      return res.status(400).json({message:err.message})
    })
})
//Update Profile
//View Profile;

module.exports = Router;

