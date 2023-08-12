var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var txRouter = require('./routes/tx');
var txCountRouter = require('./routes/txCount');
var mypageInfoRouter = require('./routes/mypage/mypageInfo');
var mypageTxRouter = require('./routes/mypage/mypageTx');
var mypageApprovedRouter = require('./routes/mypage/mypageApproved');
var mypageBalanceRouter = require('./routes/mypage/mypageBalance');
var mypagePortfolioRouter = require('./routes/mypage/mypagePortfolio');

var app = express();
var corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/tx', txRouter);
app.use('/txcount', txCountRouter);
app.use('/myinfo', mypageInfoRouter);
app.use('/mytx', mypageTxRouter);
app.use('/myapproved', mypageApprovedRouter);
app.use('/mybalance', mypageBalanceRouter);
app.use('/myportfolio', mypagePortfolioRouter);

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
