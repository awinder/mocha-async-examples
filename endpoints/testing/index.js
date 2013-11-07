var express = require('express')
  , app = exports = module.exports = express()
  , ctrl = require('./controller');

app.get('/', ctrl.test);
app.get('/query', ctrl.query);