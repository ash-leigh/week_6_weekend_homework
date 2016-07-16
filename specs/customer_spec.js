var Customer = require('../customer');
var Record = require('../record');
var RecordStore = require('../record_store');
var assert = require('chai').assert;

describe('Customer', function(){

  beforeEach(function(){
    customer1 = new Customer("Ashleigh", 100);
    record1 = new Record("Belle and Sebastian", "Tigermilk", 20);
    record2 = new Record("The Civil Wars", "Live at Eddie's Attic", 10);
    record3 = new Record("The Falls", "Omaha", 30);
    record4 = new Record("The xx", "Coexist", 5);
    recordstore1 = new RecordStore("Spotify", "Edinburgh")
  })

  it("should be able to buy a record reducing the stores stock, increasing stores cash and adding it to their record collection", function(){
    recordstore1.addRecord([record1, record2, record3, record4]);
    customer1.buyRecord(record1, recordstore1);
    assert.equal(20, recordstore1.total);
    assert.equal(3, recordstore1.inventory.length);
    assert.equal(80, customer1.cash);
    assert.equal(1, customer1.recordCollection.length);
  })

  it("should be able to sell a record, removing it from the record collection, increasing the customers cash, decreasing the record stores total and increasing their inventory", function(){
    recordstore1.addRecord([record1, record2, record3, record4]);
    customer1.buyRecord(record1, recordstore1);
    customer1.buyRecord(record2, recordstore1);
    customer1.sellRecord(record1, recordstore1);
    assert.equal(1, customer1.recordCollection.length);
    assert.equal(90, customer1.cash);
    assert.equal(10, recordstore1.total);
    assert.equal(3, recordstore1.inventory.length);
  })


})