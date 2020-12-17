const { request } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  if (request.session.loggedin) {
    var user = {'login-state':request.session.loggedin,'user':request.session.name}
    res.send(user);
  } else {
    //response.send('Please login to view this page!');
  }
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  var user = { 'login-state': false, 'user': request.session.name }
  res.send(user);
});

module.exports = router;
