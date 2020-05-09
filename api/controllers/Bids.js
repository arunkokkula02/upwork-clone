const User = require('../../models').User;
const Job = require('../../models').Job;
const Bid = require('../../models').Bid;

exports.apply = (req,res) =>{
   return  Bid.create({freelancerId:3,jobsId:5,status:true})
  .then(() => {
    return res.status(200).json("Applied")
  })
  .catch((err) => {
    return res.status(400).json(err)
  })
}




// // Insert into bids table
// User.findOne({where: {id: 2}, include:['jobbids']})
// .then((user) => {
//    console.log(user);
//    user.addJobbid(5,{ through: { status:1 }})
//     .then((joinedJobs) =>{
//       console.log(joinedJobs)
//     })
//     .catch((err) => {
//       console.log("Error inserting into join table : ",err)
//     })
//   })
// .catch((err) => {
//   console.log("Error while Users search : ", err);
// })