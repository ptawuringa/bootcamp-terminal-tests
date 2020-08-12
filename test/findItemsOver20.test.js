let assert = require("assert");
let findItemsOver20= require("../findItemsOver20");

describe("The findItemsOver20 function ", function(){
    
    it("should return  4", function() {
      
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var Item = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},

        ]
        
        assert.deepEqual(findItemsOver20(itemList,20), Item);

    })

    });