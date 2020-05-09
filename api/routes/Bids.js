const express = require('express');
const Router = express.Router();
const {apply} = require('../controllers/Bids');

Router.post('/',apply);