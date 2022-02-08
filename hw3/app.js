//@author: Jennifer Brana


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders'); //add ordersRouter

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter); //use ordersRouter

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;



//source: https://www.geeksforgeeks.org/how-http-post-request-work-in-node-js/
// '/' == route
// 'function' == callback function
// app.post("/", function(req, res) {
//   //this is the callback function
//   const order1 = {topping: "cherry", quantity: 2};
//   const order2 = {topping: "plain", quantity: 6};
//   const order3 = {topping: "chocolate", quantity: 3};
//   const response = [order1, order2, order3];
// 
//   console.log(response);
//
//   //res.json(response);
//   res.end(JSON.stringify(response)); //source:https://www.javatpoint.com/expressjs-post
// });









//
