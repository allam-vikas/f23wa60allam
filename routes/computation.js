var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    sqaureroot = Math.random();
 } 
 else {
    sqaureroot = req.query.x;
 }
 var result = Math.random(sqaureroot);
  res.render('computation', { bonuscode: `Math.random(${sqaureroot}) is ${result}` });
});

module.exports = router;