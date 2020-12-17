var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog', {  });
});
router.get('/bl01', function (req, res, next) {
  res.render('Bl01', {});
});
router.get('/bl02', function (req, res, next) {
  res.render('Bl02', {});
});
router.get('/bl03', function (req, res, next) {
  res.render('Bl03', {});
});
router.get('/bl04', function (req, res, next) {
  res.render('Bl04', {});
});
module.exports = router;
