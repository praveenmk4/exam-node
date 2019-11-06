const express = require('express');
const router = express.Router();
const Index =  require('../controllers/index');

router.get('/',Index.getIndex);

module.exports = router;