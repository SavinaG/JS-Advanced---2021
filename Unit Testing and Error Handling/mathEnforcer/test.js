let {expect} = require('chai');
let mathEnforcer = require('./solution')

describe('Test mathEnforcer', () => {
    it('Check for valid addFive input', () => {
        expect(mathEnforcer.addFive('a')).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(5.2)).to.equal(10.2);
        
    });
    it('Check for valid subtractTen input', () => {
        expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
        expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        expect(mathEnforcer.subtractTen(25)).to.equal(15);
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        expect(mathEnforcer.subtractTen(15.1)).to.equal(5.1);
        expect(mathEnforcer.subtractTen(-5.5)).to.equal(-15.5);
        expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
    });
    it('Check for valid sum input', () => {
        expect(mathEnforcer.sum('a', 'a')).to.equal(undefined);
        expect(mathEnforcer.sum([], {})).to.equal(undefined);
        expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
        expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
        expect(mathEnforcer.sum(25, 5)).to.equal(30);
        expect(mathEnforcer.sum(-5, 10)).to.equal(5);
        expect(mathEnforcer.sum(2.2, 3)).to.equal(5.2);
        expect(mathEnforcer.sum(2.2, 3.3)).to.equal(5.5);
        expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
    });
});

 

