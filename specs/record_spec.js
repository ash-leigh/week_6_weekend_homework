var Record = require('../record');
var assert = require('chai').assert;

describe('Record', function(){

  beforeEach(function(){
    record1 = new Record("Belle and Sebastian", "Tigermilk", 20);
  })

  it("should have a artist, title and price", function(){
    assert.equal("Belle and Sebastian", record1.artist);
    assert.equal("Tigermilk", record1.title);
    assert.equal(20, record1.price);
  })

})