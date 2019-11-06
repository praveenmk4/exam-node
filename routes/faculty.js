const express = require('express');
const router = express.Router();
const Faculty =  require('../controllers/faculty.controller');
router.post('/addNewFaculty',Faculty.addFaculty);

module.exports = router;