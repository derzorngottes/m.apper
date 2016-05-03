var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/find/:id', (req, res, next) => {
  //console.log(req.body);

  /* this route works
     the next step is to get the 'id' from the url params
     and use that to look up the events with the meetup API
  */

});

module.exports = router;
