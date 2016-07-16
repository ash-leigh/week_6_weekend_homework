var _ = require('lodash');
var Record = require('./record');

var RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.inventory = [];
  this.total = 0;
}

RecordStore.prototype = {
  addRecord: function(records){
    _.forEach(records, function(record){
      this.inventory.push(record);
    }.bind(this))
  },
  listInventory: function(){
    var result = _(this.inventory)
    .groupBy('title')
    .map(function(items, title) { 
     return {title: title, stock: items.length };
   }).value();
    return result;
  },
  sellRecord: function(record){
    var index = this.inventory.indexOf(record);
    this.total += record.price;
    this.inventory.splice(index, 1);
  },
  finacialAdmin: function(){
    var totalInventoryValue = 0;
    _.forEach(this.inventory, function(record){
      totalInventoryValue += record.price;
    })
    return "Total cash: £" + this.total + " Total value of inventory £" + totalInventoryValue;
  }

}


// recordstore1 = new RecordStore("Spotify", "Edinburgh");
// record1 = new Record("Belle and Sebastian", "Tigermilk", 20);
// record2 = new Record("Belle and Sebastian", "Tigermilk", 20);
// record3 = new Record("The Civil Wars", "Live at Eddie's Attic", 10);
// record4 = new Record("The Falls", "Omaha", 30);
// record5 = new Record("The xx", "Coexist", 5);


// recordstore1.addRecord([record1, record2, record3, record4, record5]);
// console.log(recordstore1.listInventory());

module.exports = RecordStore;





