let {expect} = require('chai');
let isSymmetric = require('./solution')

describe('isSymmetric', () => {
    it('Works with valid input', () => {
        expect(isSymmetric([1, 1])).to.equal(true);
    });
    it('Return false with non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.equal(false);
    });
    it('Return false with invalid input', () => {
        expect(isSymmetric('')).to.equal(false);
    });
    it('Return true with valid odd input', () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true);
    });
    it('Return true with valid string input', () => {
        expect(isSymmetric(['a', 'a', 'a'])).to.equal(true);
    });
    it('Return false with odd string input', () => {
        expect(isSymmetric(['a', 'a', 'b'])).to.equal(false);
    });
    it('Return false with diferent type input', () => {
        expect(isSymmetric([1, '1'])).to.equal(false);
    });
});

 

