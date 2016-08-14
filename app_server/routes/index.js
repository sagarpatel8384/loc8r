var express = require('express');
var router = express.Router();
var yourModule = require('../controllers/homepageController');

// Homepage
router.get('/', yourModule.stuff);

module.exports = router;
