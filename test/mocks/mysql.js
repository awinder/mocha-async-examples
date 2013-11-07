var util = require('util');

var mysql = function () {
  this.error = null;
  this.response = [];
  this.fields = [];
  this.sql = "";
  this.config = undefined;
};

mysql.prototype.createConnection = function(config) {
  this.config = config;
  return this;
};

mysql.prototype.connect = function() {
};

mysql.prototype.query = function(sql, callback) {
  this.sql = sql;
  callback(this.error, this.response, this.fields)
};

module.exports = function() {
  return new mysql();
};