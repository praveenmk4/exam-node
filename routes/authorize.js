const express =  require('express');
const router  = express.Router();
const  authenticationHandler = require('../controllers/authenticationHandler.controller');

router.post('/regiser',authenticationHandler.regiser);