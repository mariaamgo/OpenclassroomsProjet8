var express = require('express');
var compression = require('compression');
var app = express();
var mailRouter = require('./routes/mail');

app.use(express.json());

// Middleware de compression pour optimiser les performances
app.use(compression());
app.use(express.static('public'));
app.use('/', mailRouter);

// Route principale
app.get('/', (req, res) =>{
  res.sendFile(__dirname + 'public')
})


module.exports = app;
