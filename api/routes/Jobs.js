const express = require('express');
const Router = express.Router();
const {createJob,updateJob,getJob,getAllJobs} = require('../controllers/Jobs');

Router.post('/job/:id',createJob)
Router.put('/job/:id',updateJob)
Router.get('/job/:id',getJob)
Router.get('/jobs',getAllJobs)

module.exports = Router;