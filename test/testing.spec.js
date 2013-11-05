var expect = require('chai').expect
  , res = require('./mocks/response')
  , testing = require('../endpoints/testing/controller');

describe('Testing', function(){
  it('Should send an object with a testing key', function(done){
    res.on('response', function(resp) {
      expect(resp.response).to.have.property('testing');
      expect(resp.response.testing).to.equal(true);
      done();
    });
    
    testing.test({}, res);
  });
});
  