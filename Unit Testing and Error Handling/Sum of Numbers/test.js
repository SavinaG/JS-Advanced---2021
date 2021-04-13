let {expect} = require('chai');
let sum = require('./solution')

describe('Sum numbers', () => {
    it('Sum single num', () => {
        expect(sum([1])).to.equal(1);
    });
    it('Sum multiple nums', () => {
        expect(sum([1, 1])).to.equal(2);
    });
    it('Sum diferent nums', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
});

 

