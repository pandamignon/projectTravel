var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  });
});

router.get('/Bk01', function (req, res, next) {
  res.render('Bk01', {});
});

router.get('/Bk02', function (req, res, next) {
  res.render('Bk02', {});
});

router.get('/Bk03', function (req, res, next) {
  res.render('Bk03', {});
});

router.get('/Bk04', function (req, res, next) {
  res.render('Bk04', {});
});

router.get('/Bk05', function (req, res, next) {
  res.render('Bk05', {});
});

router.get('/Bk06', function (req, res, next) {
  res.render('Bk06', {});
});

module.exports = router;
