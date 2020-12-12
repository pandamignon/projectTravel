var express = require('express');
var router = express.Router();
var con = require('../lib/db')
const { request } = require('../app');
var md5 = require('md5');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {  });
});

router.post('/submit', function (req, res, next) {
  var user = req.body.user;
  var pass = md5(req.body.pwd);
  console.log(user,pass);
  con.query("SELECT * FROM user WHERE username = '"+user+"' AND password = '"+pass+"'", function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    if(rows.length <= 0){
      req.flash('error', 'Please enter correct Username and Password');
      res.redirect("/login");
    } else {
      req.session.loggedin = true;
      req.session.name = rows[0].name;
      console.log(req.session.name);
      res.send(rows);
    }
      
  });
});

module.exports = router;
