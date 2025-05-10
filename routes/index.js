const router = require('express').Router();

const myController = require('../controllers');

router.use('/contacts', require('./contacts'));
router.get('/', myController.awesomeFunction);

module.exports = router;