const express = require('express');
const Router = express.Router();
const { checkToken } = require('../middleware/auth')
const { createFreelancer, updateFreelancer, getFreelancer, getAllFreelancers } = require('../controllers/FreelanceProfile');

Router.post('/freelancer/:id', checkToken, createFreelancer)
Router.put('/freelancer/:id', checkToken, updateFreelancer)
Router.get('/freelancer/:id', checkToken, getFreelancer)
Router.get('/freelancers', getAllFreelancers)

module.exports = Router;

