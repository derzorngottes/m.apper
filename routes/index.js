var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var rp = require('request-promise');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/:id', (req, res, next) => {
  var userLat = req.query.latlong.substring(0, req.query.latlong.indexOf('-'));
  var userLon = req.query.latlong.substring((req.query.latlong.indexOf('-') + 1), req.query.latlong.length);
  var eventId = req.params.id;
  //console.log('params is ' + req.params);
  //req. whatever - use helpers to build meetup thingy
  //res.send([eventsArray, details])
});

module.exports = router;
