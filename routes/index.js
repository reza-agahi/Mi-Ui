var express = require('express');
var router = express.Router();
const Pedestrian = require('../model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'People Counting Dashboard' });
});

/* GET home page. */
router.get('/data', function(req, res, next) {
  console.log('1');
  var output = {};
  Pedestrian.findAll()
  .then(function(results) {
    console.log(results.length);
    var adultIn = 0;
    var adultOut = 0;
    var youthIn = 0;
    var youthOut = 0;
    for (var i = 0; i < results.length; i++) {
        adultIn = (results[i].adultChild && results[i].inOut) ? adultIn + 1 : adultIn;
        adultOut = (results[i].adultChild && !results[i].inOut) ? adultOut + 1 : adultOut;
        youthIn = (!results[i].adultChild && results[i].inOut) ? youthIn + 1 : youthIn;
        youthOut = (!results[i].adultChild && !results[i].inOut) ? youthOut + 1 : youthOut;
    }
    output.adultIn = adultIn;
    output.adultOut = adultOut;
    output.youthIn = youthIn;
    output.youthOut = youthOut;
    console.log(output);
    res.json(output);
  });
});

module.exports = router;
