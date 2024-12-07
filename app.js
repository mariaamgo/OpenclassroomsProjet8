var express = require('express');
var compression = require('compression');
var app = express();
var mailRouter = require('./routes/mail');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(compression());
app.use(express.static('public'));
app.use('/', mailRouter);

app.get('/', (req, res) =>{
  res.sendFile(__dirname + 'public')
})


module.exports = app;
