var mysql = require('mysql');

module.exports = {
  test : function(req, res) {
    setTimeout(function() {
      res.send({ testing : true }, 200);
    }, 5000);
  },
  query : function(req, res) {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'user',
      password : 'password',
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
      if (rows.length > 0 && rows[0].solution === 2) {
        res.send({ status : "success" }, 200);
      } else {
        res.send({ status : "failure" }, 500);
      }
    });
  }
}