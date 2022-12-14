const { application } = require('express');
var express = require('express');
var router = express.Router();

express.use
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Comic 1 page */
router.get('/comic1', function(req, res, next){
  res.render('comic1');
});
/* Comic 2 page */
router.get('/comic2', function(req, res, next) {
res.render('comic2');
});
/* Comic 3 page */
router.get('/comic3', function(req, res, next) {
  res.render('comic3');
});
/* Comic 4 page */
router.get('/comic4', function(req, res, next) {
  res.render('/comic4');
});
/* Comic 5 page */
router.get('/comic5', function(req, res, next) {
  res.render('/comic5');
});

module.exports = router;
