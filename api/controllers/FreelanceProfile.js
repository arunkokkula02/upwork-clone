const Profile = require('../../models').Profile;
const User = require('../../models').User;

//Create Profile
exports.createFreelancer = (req,res) => {
  return Profile.create({...req.body,userId:parseInt(req.params.id)})
    .then((profile)=>{
      return res.status(201).json(profile);
    }).catch((err) => {
      return res.status(400).json({message:err.message})
    })
}
// Update Profile
exports.updateFreelancer = async(req,res) => {
  const profile = await Profile.findByPk(parseInt(req.params.id))
  if(!profile) {
    return res.status(404).json({message:"Profile does not exist"})
  }
  
  return Profile.update(req.body,{
    where:{
      id:req.params.id
    }})
    .then(()=>{
      return res.status(200).json({message:"Record updated"})
    }).catch((err) => {
      return res.status(400).json({message:err.message})
    })
 }
 

//View 1 Profile;
exports.getFreelancer = (req,res) => {
  return User.findOne({
    where:{isFreelancer:true},
    include: [{
        model: Profile,
        where: {userId:parseInt(req.params.id)}
    }]
}).then((users) =>{
   return res.status(200).json(users)
  }).catch((err) => {
    return res.status(404).json(err);
  })
}

// view all freelancers
exports.getAllFreelancers = (req,res) => {
  return User.findAll({
    where:{isFreelancer:true},
    include: [Profile]
  })
  .then((freelancers) => {
    res.status(200).json(freelancers)
  })
  .catch((err) => {
    res.status(404).json(err)
  })
}