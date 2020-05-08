const express = require('express');
const Router = express.Router();
const { checkToken } = require('../middleware/auth')
const { createEmployer, updateEmployer, getEmployer, getAllEmployers } = require('../controllers/EmployerProfile')

Router.post('/employer/:id', checkToken, createEmployer)
Router.put('/employer/:id', checkToken, updateEmployer)
Router.get('/employer/:id', checkToken, getEmployer)
Router.get('/employers', getAllEmployers)

module.exports = Router;


