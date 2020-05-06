const express = require('express');
const Router = express.Router();
const {createFreelancer,updateFreelancer,getFreelancer,getAllFreelancers} = require('../controllers/FreelanceProfile');

Router.post('/freelancer/:id',createFreelancer)
Router.put('/freelancer/:id',updateFreelancer)
Router.get('/freelancer/:id',getFreelancer)
Router.get('/freelancers',getAllFreelancers)

module.exports = Router;

