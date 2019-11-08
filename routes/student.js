const express = require('express');
const router = express.Router();
const Student = require('../controllers/student.controller');
router.post('/addStudent', Student.addStudent);

module.exports = router;