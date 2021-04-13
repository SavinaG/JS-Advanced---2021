let {expect} = require('chai');
let isOddOrEven = require('./solution')

describe('isOddOrEven', () => {
    it('Check if input is valid', () => {
        expect(isOddOrEven(0)).to.equal(undefined);
    });
    it('Check for even', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });
    it('Check for odd', () => {
        expect(isOddOrEven('aaa')).to.equal('odd');
    })
});

 

