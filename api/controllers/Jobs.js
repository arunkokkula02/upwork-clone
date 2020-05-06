const Job = require('../../models').Job;
const User = require('../../models').User;
// Add a new job
exports.createJob = (req,res) => {
  return Job.create({...req.body,userId:parseInt(req.params.id)})
  .then((job) => {
    return res.status(201).json(job)
  })
  .catch((err) => {
    return res.status(400).json(err)
  })
}

// Update a job

exports.updateJob = async(req,res) => {
  const job = await Job.findByPk(parseInt(req.params.id))
  if(!job) {
    return res.status(404).json({message:"Profile does not exist"})
  }
  
  return Job.update(req.body,{
    where:{
      id:req.params.id
    }})
    .then(()=>{
      return res.status(200).json({message:"Record updated"})
    }).catch((err) => {
      return res.status(400).json({message:err.message})
    })
 }
// view a specific job

exports.getJob = (req,res) => {
  return Job.findOne({
    where:{id:parseInt(req.params.id)},
    include: [User]
}).then((job) =>{
   return res.status(200).json(job)
  }).catch((err) => {
    return res.status(404).json(err);
  })
}

// view all jobs
exports.getAllJobs = (req,res) => {
  return Job.findAll({
    include: [User]
  })
  .then((jobs) => {
    res.status(200).json(jobs)
  })
  .catch((err) => {
    res.status(404).json(err)
  })
}