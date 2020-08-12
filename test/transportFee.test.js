let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function ", function(){
  
    it ("should return 'R20' morning shift", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal('R20',transportFee("morning"));
    }); 

   it ("should return 'R10' afternoon shift", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal('R10', transportFee("afternoon"));
    }); 

   it ("should return 'free' night shift", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal('free', transportFee("night"));
    }); 
});