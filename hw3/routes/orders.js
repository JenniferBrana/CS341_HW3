//@author: Jennifer Brana


var express = require('express');
var router = express.Router();

var dbms = require('./dbms_promise.js');

// const arrayOrders =
//     {"data": [
//         {"cherry" : {topping: "cherry", quantity: 2}},
//         {"chocolate" : {topping: "chocolate", quantity: 6}},
//         {"plain" : {topping: "plain", quantity: 3}}
//     ]};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(arrayOrders);
});


router.post('/', function(req, res){
    var month = req.body.month.toUpperCase();

    var quereeey = "SELECT SUM(QUANTITY) FROM ORDERS " +
                "WHERE MONTH='" + month + "' AND TOPPING='cherry'" +
                " UNION " + "SELECT SUM(QUANTITY) FROM ORDERS " +
                "WHERE MONTH='" + month + "' AND TOPPING='chocolate'" + " UNION " +
                "SELECT SUM(QUANTITY) FROM ORDERS " + "WHERE MONTH='" + month + "' AND TOPPING='plain';";


    var data = dbms.dbquery(quereeey);
    data.then(function(results){
        console.log("results:" + JSON.stringify(results));
        var cherryData = (results[0]["SUM(QUANTITY)"] == null) ? 0 : results[0]["SUM(QUANTITY)"];
        var chocolateData = (results.length < 2 || results[1]["SUM(QUANTITY)"] == null) ? 0 : results[1]["SUM(QUANTITY)"];
        var plainData = (results.length < 3 || results[2]["SUM(QUANTITY)"] == null) ? 0 : results[2]["SUM(QUANTITY)"];
        res.json({"data": [
            {"cherry" : {topping: "cherry", quantity: cherryData}},
            {"chocolate" : {topping: "chocolate", quantity: chocolateData}},
            {"plain" : {topping: "plain", quantity: plainData}}
        ]});
    });



    console.log(month);
    //res.json(arrayOrders);
});


module.exports = router;
