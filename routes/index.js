var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var helpers = require('../db/helpers');
var queries = require('../db/queries');

var rp = require('request-promise');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET list of events and send to map */
router.get('/:id/', (req, res, next) => {
  var userLat = req.query.latlong.substring(0, req.query.latlong.indexOf('@'));
  var userLon = req.query.latlong.substring((req.query.latlong.indexOf('@') + 1), req.query.latlong.length);
  var eventId = req.params.id;

  var pins_bubbleDetails = helpers.get_events(userLat, userLon, eventId);

  res.send(pins_bubbleDetails);
});

module.exports = router;
