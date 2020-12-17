var express = require('express');
var router = express.Router();
var con = require('../lib/db')
/* GET home page. */
router.get('/view/:id/', function (req, res, next) {
    var id = Number(req.params.id);
    //question
    var sql = "SELECT * FROM questions WHERE id= "+id+" ";
    con.query(sql, function (err, ques, fields) {
        if (err) throw err;
        console.log(ques);
        /*if (ques.length <= 0) {
            
        } else {
            
        }*/
    });


    // answer
    var sql_a = "SELECT * FROM answers where question_id='"+id+"' ";
    con.query(sql, function (err, rows, fields) {
        if (err) throw err;
        //console.log(rows);
        if (rows.length <= 0) {

        } else {

        }
    });

    // update view
    /*var sql_u = "UPDATE questions SET view=view+1 WHERE id='{$_GET['id']}' ";
    con.query(sql_u);*/

    res.render('viewTopic', {});
});

router.get('/addTopic', function (req, res, next) {
    res.render('newTopic', {});
});
router.post('/addTopic/add', function (req, res, next) {
    var today = new Date();   
    var topic = req.body.topic;
    var detail = req.body.detail;
    var username = req.session.name;
    var created = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    created += " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var sql = "INSERT INTO questions (topic,detail,username,created) VALUES ";
    sql += "('"+topic+"','"+detail+"','"+username+"','"+created+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result);
    })
});
router.get('/viewtopic/', function (req, res, next) {
    res.render('main_webboard', {});
});
module.exports = router;
