var expect = require('chai').expect
  , proxyquire = require('proxyquire');

describe('Testing', function(){
  it('Should return a positive response when queries return appropriately', function(done){
    var mysql = require('./mocks/mysql')()
      , testing = proxyquire('../endpoints/testing/controller', { 'mysql' : mysql } )
      , res = require('./mocks/response')();

    mysql.response = [{solution: 2}];
        
    res.on('response', function(resp) {
      expect(resp.response).to.have.property('status');
      expect(resp.response.status).to.equal('success');
      expect(resp.code).to.equal(200);
      
      done();
    });
    
    testing.query({}, res);
  });
  
  it('Should return a negative response when queries return errors', function(done){
    var mysql = require('./mocks/mysql')()
      , testing = proxyquire('../endpoints/testing/controller', { 'mysql' : mysql } )
      , res = require('./mocks/response')();

    mysql.error = new Error('Ut oh...');
    res.on('response', function(resp) {
      expect(resp.response).to.have.property('status');
      expect(resp.response.status).to.equal('failure');
      expect(resp.code).to.equal(500);
      
      done();
    });
    
    testing.query({}, res);
  });
});
  