
/**
 * Author Patrick Wolleb, SH MEDIA Limited.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

// Load configurations
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]
  , mongoose = require('mongoose');


var app = express();

// Bootstrap db connection
mongoose.connect(config.db)

// Congiure Express
require('./config/express')(app, config);

// Bootstrap routes
require('./config/routes')(app, config);




http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});