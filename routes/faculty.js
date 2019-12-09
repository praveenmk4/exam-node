const express = require('express');
const router = express.Router();
const Faculty =  require('../controllers/faculty.controller');
router.post('/addNewFaculty',Faculty.addFaculty);
router.get('/getAllFacuties',Faculty.getAllFacuties);
router.get('/getFacultyByEmail/:email',Faculty.getFacultyByEmail);
router.post('/loginFacutly',Faculty.loginFacutly);
module.exports = router;