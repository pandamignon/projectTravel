var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: "3306",
  database: "travel"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {  });
});

router.post('/submit', function (req, res, next) {
  var user = req.body.user;
  var pass = req.body.pwd;
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM user WHERE username = '"+user+"' AND password = MD5('"+pass+"')", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});
module.exports = router;
