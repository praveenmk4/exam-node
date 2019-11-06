const express = require('express');
const router = express.Router();
const Admin =  require('../controllers/admin.controller');
router.get('/home',Admin.getHome);
router.get('/logout',Admin.logout);
module.exports = router;