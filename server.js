//set up package
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./app/config/config');
var morgan = require('morgan');
var User = require('./app/models/user');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//set up environment
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

//set up view
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})

//set up database
mongoose.connect(config.database, function(err) {
  if (err)
    console.log('Connection failed!');
  else
    console.log('Connection successfully.');
});

//routes
require('./app/routes/routes')(app);

app.listen(config.port);
console.log('crud-mean-stack running at http://localhost:' + config.port);
