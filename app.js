var express = require('express')
  , fs = require('fs')
  , app = express()
  , endpoints = fs.readdirSync(__dirname + '/endpoints');

endpoints.forEach(function(endpoint) {
  app.use('/' + endpoint, require(__dirname + '/endpoints/' + endpoint));
});

app.listen(3000);
console.log('Listening on port 3000');
