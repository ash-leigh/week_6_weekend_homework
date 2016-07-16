var _ = require('lodash');
var RecordStore = require('./record_store');

var Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.recordCollection = [];
}

Customer.prototype = {
  buyRecord: function(record, recordStore){
    this.recordCollection.push(record);
    this.cash -= record.price;
    recordStore.sellRecord(record);
  },
  sellRecord: function(record, recordStore){
    var index = this.recordCollection.indexOf(record);
    this.cash += record.price;
    this.recordCollection.splice(index, 1);
    recordStore.total -= record.price;
    recordStore.addRecord([record]);
  }
}

module.exports = Customer;