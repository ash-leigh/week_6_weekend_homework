var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('chai').assert;

describe("Record store", function(){

  beforeEach(function(){
    record1 = new Record("Belle and Sebastian", "Tigermilk", 20);
    record2 = new Record("The Civil Wars", "Live at Eddie's Attic", 10);
    record3 = new Record("The Falls", "Omaha", 30);
    record4 = new Record("The xx", "Coexist", 5);
    recordstore1 = new RecordStore("Spotify", "Edinburgh")
  })

  it("should have a name and location", function(){
    assert.equal("Spotify", recordstore1.name);
    assert.equal("Edinburgh", recordstore1.location);
  })

  it("should be able to add records to the inventory", function(){
    recordstore1.addRecord([record1, record2, record3, record4]);
    assert.equal(4, recordstore1.inventory.length)
  })

  it("should be able to list inventory", function(){
    recordstore1.addRecord([record1, record2, record3, record4]);
    assert.equal(4, recordstore1.listInventory().length)
  })

  it("should be able to sell a record", function(){
    recordstore1.addRecord([record1, record2, record3, record4]);
    recordstore1.sellRecord(record1);
    assert.equal(3, recordstore1.inventory.length);
    assert.equal(20, recordstore1.total);
  })

  it("should report the financial information for the store - total cash and total value of inventory", function(){
    recordstore1.addRecord([record1, record2, record3, record4]);
    assert.equal("Total cash: £0 Total value of inventory £65", recordstore1.finacialAdmin());
  });
  

})