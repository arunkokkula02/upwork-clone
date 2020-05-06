const express = require('express');
const Router = express.Router();
const {createEmployer,updateEmployer,getEmployer,getAllEmployers} = require('../controllers/EmployerProfile')

Router.post('/employer/:id',createEmployer)
Router.put('/employer/:id',updateEmployer)
Router.get('/employer/:id',getEmployer)
Router.get('/employers',getAllEmployers)

module.exports = Router;


