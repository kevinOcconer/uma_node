var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//starting mongo db
require('./util/db');

// const mongoose = require('mongoose');
// const uri = "mongodb+srv://admin:admin@cluster0.pkb5w.mongodb.net/attendance?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('MongoDB Connected..')
// })
// .catch(err => console.log(err))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UserRoutes');
var studentRouter = require('./routes/studentRoutes')
var classRouter = require('./routes/classRoutes');
var subjectController = require('./routes/subjectRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student',studentRouter);
app.use('/classes',classRouter);
app.use('/subjects',subjectController);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  /// error handlers
  
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({status: false,message: err.message,
            error: err});
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({status: false,message: err.message,
        error: {}});
   
  });
module.exports = app;
