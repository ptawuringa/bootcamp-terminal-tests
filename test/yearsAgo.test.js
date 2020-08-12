let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("The yearsAgo function ", function(){
    
    it ("should say that 1996 is 24 years ago", function() {
        
        assert.equal(24, yearsAgo(1996));
    });
  
    it ("should say that 2000 is a 20 years ago", function() {
        
        assert.equal(20, yearsAgo(2000));
    });
    

});