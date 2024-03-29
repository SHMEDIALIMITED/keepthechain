
/**
 * Module dependencies.
 */

var express = require('express');
var Models = require('../app/models');
var base64url = require('b64url');

function parseSignedRequest(signed_request, secret) {
    if(!signed_request) return;
    var crypto = require('crypto');
    encoded_data = signed_request.split('.',2);
    // decode the data
    sig = encoded_data[0];
    json = base64url.decode(encoded_data[1]);
    data = JSON.parse(json); // ERROR Occurs Here!
    
    // check algorithm - not relevant to error
    if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
        console.error('Unknown algorithm. Expected HMAC-SHA256');
        return null;
    }
 
    // check sig - not relevant to error
    expected_sig = crypto.createHmac('sha256',secret).update(encoded_data[1]).digest('base64').replace(/\+/g,'-').replace(/\//g,'_').replace('=','');
    if (sig !== expected_sig) {
        console.error('Bad signed JSON Signature!');
        return null;
    }
 
    return data;
}

module.exports = function (app, config) {

  var User = Models.User;

  app.set('showStackError', true)
  // should be placed before express.static
  app.use(express.compress({
    filter: function (req, res) {
      return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
    },
    level: 9
  }))


  app.use(express.logger('dev'))

  // set views path, template engine and default layout
  app.set('port', process.env.PORT || 8080);

  app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views',  config.root + '/public');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');


  app.configure(function () {
    // dynamic helpers
    app.use(express.favicon())
    // cookieParser should be above session
    app.use(express.cookieParser())

    // bodyParser should be above methodOverride
    app.use(express.bodyParser())
    app.use(express.methodOverride())



    

    

    // routes should be at the last
    app.use(app.router)
      app.use(express.static(config.root + '/public'))

    // assume "not found" in the error msgs
    // is a 404. this is somewhat silly, but
    // valid, you can do whatever you like, set
    // properties, use instanceof etc.
    app.use(function(err, req, res, next){
      // treat as 404
      if (~err.message.indexOf('not found')) return next()

      // log it
      console.error(err.stack)

      // error page
      res.status(500).render('500', { error: err.stack })
    })

    // assume 404 since no middleware responded
    app.use(function(req, res, next){
      res.status(404).render('404', { url: req.originalUrl })
    })

  })
}