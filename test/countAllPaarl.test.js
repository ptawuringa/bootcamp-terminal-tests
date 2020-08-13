let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function ", function(){
    
    it("should return 1 for 'CJ 123-223'", function() {
      
        // change anything in here to make the test pass
        assert.equal(1, countAllPaarl("CJ 123-223, CA 123-123"));
      });
     
  
      it("should return 2 - but the parameter needs work'", function() {
       
        // only change code below this line in this function to make this test pass
        
        assert.equal(2, countAllPaarl("CJ 123-123, CA 123-123,CJ 124-124, CA 124-124"));
      });
    

});