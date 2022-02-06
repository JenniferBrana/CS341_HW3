//@author: Jennifer Brana


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const order1 = {topping: "cherry", quantity: 2};
  const order2 = {topping: "plain", quantity: 6};
  const order3 = {topping: "chocolate", quantity: 3};
  const arrayOrders = [order1, order2, order3];
  res.json(arrayOrders);
});

module.exports = router;
