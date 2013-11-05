var express = require('express')
  , app = exports = module.exports = express()
  , ctrl = require(__dirname + "/controller");

app.get('/', ctrl.test);