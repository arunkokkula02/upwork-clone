const express = require('express');
const Router = express.Router();
const {createUser,updateUser,getUser} = require('../controllers/User');


Router.post('/',createUser)
Router.get('/:id',getUser)
Router.put('/user/:id',updateUser)


module.exports = Router;


