const User = require('../../models').User;
const Profile = require('../../models').Profile;

  // Create user
exports.createUser= (req,res) => {
  return User.create(req.body)
  .then((createdUser) => {
    return res.status(201).json(createdUser)
   
  })
  .catch((err) => {
    return res.status(400).json({message:err.message})
  })
}

// Get a spefific user
exports.getUser = (req,res) => {
  return User.findByPk(req.params.id).then(user => {
    res.status(200).json(user)
  })
}

// update user
exports.updateUser = (req,res) => {
 return User.update(req.body,{
   where:{
     id:req.params.id
   }})
   .then(()=>{
     return res.status(200).json({message:"Record updated"})
   }).catch((err) => {
     return res.status(400).json({message:err.message})
   })
}





