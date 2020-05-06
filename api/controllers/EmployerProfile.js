const EmployerProfile = require('../../models').EmployerProfile;
const User = require('../../models').User;

// Add an employer
exports.createEmployer = (req,res) => {
   return EmployerProfile.create({...req.body,userId:parseInt(req.params.id)})
  .then((emp_profile) => {
    return res.status(201).json(emp_profile);
  })
  .catch((err) => {
    return res.status(400).json(err);
  })
}

// Update Employer Profile
exports.updateEmployer =async(req,res) => {
  const profile = await EmployerProfile.findByPk(parseInt(req.params.id))
  if(!profile) {
    return res.status(404).json({message:"Profile does not exist"})
  }
  
  return  EmployerProfile.update(req.body,{
    where:{
      id:req.params.id
    }})
    .then(()=>{
      return res.status(200).json({message:"Record updated"})
    }).catch((err) => {
      return res.status(400).json({message:err.message})
    })
 }
 
 // //View 1 Employer Profile;
exports.getEmployer = (req,res) => {
  return User.findOne({
    where:{isEmployor:true},
    include: [{
        model: EmployerProfile,
        where: {userId:parseInt(req.params.id)}
    }]
}).then((users) =>{
   return res.status(200).json(users)
  }).catch((err) => {
    return res.status(404).json(err);
  })
}

// view all employer profiles
exports.getAllEmployers = (req,res) => {
  return User.findAll({
    where:{isEmployor:true},
    include: [EmployerProfile]
  })
  .then((employers) => {
    res.status(200).json(employers)
  })
  .catch((err) => {
    res.status(404).json(err)
  })
}