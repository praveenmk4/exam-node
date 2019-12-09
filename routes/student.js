const express = require('express');
const router = express.Router();
const Student = require('../controllers/student.controller');
router.post('/addStudent', Student.addStudent);
router.get('/getAllStudents',Student.getAllStudents);
router.post('/createPassword',Student.createPassword);
router.post('/loginStudent',Student.loginStudent);
module.exports = router;