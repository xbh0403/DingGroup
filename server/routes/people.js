var express = require('express');
var router = express.Router();

const people = require('../people.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(people);
});

module.exports = router;
