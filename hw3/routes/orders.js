//@author: Jennifer Brana


var express = require('express');
var router = express.Router();

const arrayOrders =
    {"data": [
        {"cherry" : {topping: "cherry", quantity: 2}},
        {"chocolate" : {topping: "chocolate", quantity: 6}},
        {"plain" : {topping: "plain", quantity: 3}}
    ]};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(arrayOrders);
});


router.post('/', function(req, res){
    res.json(arrayOrders);
});


module.exports = router;
