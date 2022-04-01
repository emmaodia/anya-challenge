const assert = require('chai').assert;
const expect = require('chai').expect;

const main = require("../index");

describe('Random Number Checks', function(){
   
    
    it('check that a and b are numbers', function(){
        assert.isNotNaN(main(1, 2), '_a, _b is not NaN');
    })

    it('check that the function returns a response', function(){
        expect(main(1, 1)).to.equal(1)
    })
    

    it('check that the result is a random number => 1', function(){
        var response = main(2, 1)
        assert.isAtLeast(2, response, "2 is greater than 1")
    })

    it('check that the result is a random number <= 100', () => {
        var response = main(1, 100)
        assert.isBelow(2, response, "2 is greater than 1")
    })
    
});

