var express = require('express');
var router = express.Router();
var con = require('../lib/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', {  });
});

router.post('/submit',function(req,res,next){
  var user = req.body.user;
  var pass = req.body.pwd;
  var fname = req.body.name;
  var lname = req.body.lname;
  var email = req.body.email;
  var tel = req.body.tel;
  var sql = "INSERT INTO user(username,password,name,surname,email,tel)";
  sql += " VALUES('" + user + "',MD5('" + pass + "'),'" + fname + "','" + lname + "','" + email + "','" + tel + "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.send(result);
  })
});

module.exports = router;
