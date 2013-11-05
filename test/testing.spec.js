var expect = require('chai').expect
  , res = require(__dirname + '/mocks/response')
  , testing = require(__dirname + '/../endpoints/testing/controller');

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
  