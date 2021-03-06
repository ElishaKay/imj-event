//general dependencies
require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var adminConfig = require('./config/adminconfig.js');


//database configuration
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: adminConfig.mysql.host,
    user: adminConfig.mysql.username,
    password: adminConfig.mysql.password,
    database: adminConfig.mysql.database
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


//route configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//internal app dependencies
var api = require('./api/api.js')(app, connection);
var routes = require('./routes/routes.js')(app, connection);

//server initiation
var port = adminConfig.port;
app.listen(port, function() {
    console.log('IMJ Event LP is up and running on port ' + port);
});