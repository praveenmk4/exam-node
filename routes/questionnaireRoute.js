const express = require('express');
const router = express.Router();
const Questions = require('../controllers/questionnaire.controller');

router.post('/addQuestions',Questions.addQuestions);
module.exports = router;