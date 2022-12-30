var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/post', function(req, res){
  res.render('post');
});
router.get('/review', function(req, res){
  res.render('review');
});


module.exports = router;
