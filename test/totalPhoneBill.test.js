let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


    describe("The totalPhoneBill function", function () {

        it("|should be able to set the call cost", function () {
            assert.equal("R8.25",totalPhoneBill('call,call,call'));
        })
        it("should be able to set sms cost",function(){
            assert.equal,("R2.60" ,totalPhoneBill('sms,sms,sms,sms'));
        })
    
        });