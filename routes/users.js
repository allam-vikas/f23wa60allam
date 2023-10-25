var express = require('express');
var router = express.Router();

// Initializing the variables
var sum = 0;
var more = 0;

// Define the router
router.get('/', function(req, res, next) {
  more += 1;
  // Add 'more' to 'sum'
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;