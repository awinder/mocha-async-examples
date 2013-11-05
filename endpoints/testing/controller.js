module.exports = {
  test : function(req, res) {
    setTimeout(function() {
      res.send({ testing : true }, 200);
    }, 5000);
  }
}