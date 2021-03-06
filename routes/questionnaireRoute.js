const express = require('express');
const router = express.Router();
const Questions = require('../controllers/questionnaire.controller');
router.get('/getRandomQuestions/:technology/:number',Questions.getRandomQuestion);
router.post('/addQuestions',Questions.addQuestions);
router.post('/saveTest',Questions.saveTest);
router.get('/getAllTests/:email',Questions.getAllTests);
module.exports = router;