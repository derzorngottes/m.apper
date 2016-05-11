var queries = require('./queries');
var rp = require('request-promise');

//var key = process.env.MEETUP_AUTHKEY;
var key = '4a26184452756a334d981616177a4d';

// *** MEETUP API FUNCTIONS *** //

function get_events (lat, lon, category) {
  var pins = [];
  var bubbleDetails = [];
  var userLat = '&lat=' + lat;
  var userLon = '&lon=' + lon;
  var userCat = '&category=' + parseInt(category);

  return rp({
    uri: 'https://api.meetup.com/2/open_events?key=' + key + userLat + userLon + userCat + '&status=upcoming'
  }).then(function(data) {
    var eventData = (JSON.parse(data));
    for(var i = 0; i < eventData.results.length; i++) {
      var pinData = eventData.results[i];

      if(pinData.hasOwnProperty('venue')) {
        var date_time = get_date_time(pinData);

        var short_desc = '';
        if(pinData.description) {
          short_desc = pinData.description.substring(0, 250);
        }

        pins.push({
          title: pinData.name,
          position: { lat: pinData.venue.lat, lng: pinData.venue.lon }
        });

        bubbleDetails.push({
          eventid: pinData.id,
          eventName: pinData.name,
          eventUrl: pinData.event_url,
          fee: pinData.fee,
          venueName: pinData.venue.name,
          rsvpCount: pinData.yes_rsvp_count,
          rsvpLimit: pinData.rsvp_limit,
          lat: pinData.venue.lat,
          lon: pinData.venue.lon,
          venuePhone: pinData.venue.phone,
          description: short_desc
        });
      }
    }
    var pins_bubbleDetails = [pins, bubbleDetails];
    return pins_bubbleDetails;
  });
}

function get_date_time (pinData) {
  var date = new Date(pinData.date);
  var hours = date.getHours();
  var minutes = date.getMinutes();

  var ampm = hours >= 12 ? 'pm' : 'am';
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getYear();
  var fullDate = month.toString() + '/' + day.toString();

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  fullTime = hours + ':' + minutes + ' ' + ampm;

  return ([fullDate, fullTime]);
}

module.exports = {
  get_events: get_events,
  get_date_time: get_date_time
}
