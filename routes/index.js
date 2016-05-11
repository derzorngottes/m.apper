var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var rp = require('request-promise');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/:id', (req, res, next) => {
  console.log('query is ' + req.query);
  console.log('params is ' + req.params);
  //req. whatever - use helpers to build meetup thingy
  //res.send([eventsArray, details])
});

module.exports = router;
