let assert = require("assert");
let countAllFromTown= require("../countAllFromTown");

describe("The countAllFromTown function ", function(){
    
    it("should return  3", function() {
      
        var fromCapetown = countAllFromTown('CA 124,CY 567,CA 345, CJ 456,CA 341','CA');
        
        assert.deepEqual(fromCapetown, 3);

    })

     it("should return 5", function(){

        var fromCapetown = countAllFromTown('CA 124,CY 567,CA 345,CA 123, CA 456,CA 341','CA');

        assert.deepEqual(fromCapetown, 5);
    
    })
});