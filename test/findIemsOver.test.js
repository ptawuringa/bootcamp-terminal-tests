let assert = require("assert");
let findItemsOver= require("../findItemsOver");

describe("The findItemsOver function ", function(){
    
    it("should return  4", function() {
      
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        

        var y = 0
        
        assert.deepEqual(findItemsOver(itemList,20), [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},

        ]);

    })

    });