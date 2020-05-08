const express = require('express');
const Router = express.Router();
const { createUser, updateUser, getUser, login } = require('../controllers/User');


Router.post('/', createUser)
Router.get('/:id', getUser)
Router.put('/user/:id', updateUser)
Router.post('/login', login)


module.exports = Router;


