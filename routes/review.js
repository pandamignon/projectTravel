var express = require('express');
var router = express.Router();
var con = require('../lib/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Review', {  });
});

router.get('/show', function (req, res, next) {
  con.query("SELECT * FROM questions ORDER BY id DESC ", function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    if (rows.length <= 0) {
      req.flash('error', 'No Topic');
    } else {
      res.send(rows);
      console.log(rows.length);
    }
  });
});

module.exports = router;
