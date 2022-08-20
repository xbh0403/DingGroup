var express = require('express');
var router = express.Router();

const papers = require('../papers.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(papers);
});

module.exports = router;
