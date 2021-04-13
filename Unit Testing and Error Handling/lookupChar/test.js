let {expect} = require('chai');
let lookupChar = require('./solution')

describe('Test lookupChar', () => {
    it('Check for valid string input', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it('Check for valid index input', () => {
        expect(lookupChar('1', '1')).to.equal(undefined);
    });
    it('Check for valid index input', () => {
        expect(lookupChar('1', 1.2)).to.equal(undefined);
    });
    it('Check for valid index bounds', () => {
        expect(lookupChar('1', 2)).to.equal("Incorrect index");
        expect(lookupChar('1', -1)).to.equal("Incorrect index");
        expect(lookupChar('1', 1)).to.equal("Incorrect index");
    });
    it('Return valid input', () => {
        expect(lookupChar('1', 0)).to.equal('1');
        expect(lookupChar('12', 1)).to.equal('2');
    });
});

 

