var express = require('express');
var router = express.Router();

var gridArray = [
    ['0','0','0'],
    ['0','X','0'],
    ['0','0','0'],
]

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { grid: gridArray });
});

module.exports = router;