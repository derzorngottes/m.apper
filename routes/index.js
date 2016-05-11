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

  helpers.get_events(userLat, userLon, eventId).then(result => {
    var pins = JSON.stringify(result[0]);
    var bubbles = JSON.stringify(result[1]);
    var pins_bubbles = [pins, bubbles];
    res.send(pins_bubbles);
  });
});

module.exports = router;
