var createError = require('http-errors');
var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/', (req, res) =>{
  res.sendFile(__dirname + 'public')
})

app.post('/', (req, res)=>{
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maria.amigo.07@gmail.com',
      pass: 'qqwl pwnm ukar rfcz'
    }
  })

  const mailOptions = {
    from: 'maria.amigo.07@gmail.com',
    replyTo: req.body.email,
    to: 'maria.amigo.07@gmail.com',
    subject: 'Message provenant de mariaamigo.fr de : ' + req.body.name,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.send('error');
    }else{
      console.log('Email envoyé : ' + info.response);
      res.send('success');
    }
  })
})
module.exports = app;
