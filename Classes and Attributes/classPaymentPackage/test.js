let { expect } = require('chai');
let PaymentPackage = require('./solution')

describe('Test PaymentPackage', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new PaymentPackage('name', 100);
    })
    it('Test constructor', () => {
        expect(instance._name).to.equal('name');
        expect(instance._value).to.equal(100);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true);

    });
    it('Test name', () => {
        expect(instance.name).to.equal('name');;
        instance.name = 'Savina';
        expect(instance.name).to.equal('Savina');
        expect(() => instance.name = '').to.throw('Name must be a non-empty string');
        expect(() => instance.name = 2).to.throw('Name must be a non-empty string');
    });
    it('Test value', () => {
        expect(instance.value).to.equal(100);;
        instance.value = 40;
        expect(instance.value).to.equal(40);
        expect(() => instance.value = '2').to.throw('Value must be a non-negative number');
        expect(() => instance.value = -2).to.throw('Value must be a non-negative number');
        expect(() => instance.value = 0).to.not.throw('Value must be a non-negative number');
    });
    it('Test VAT', () => {
        expect(instance.VAT).to.equal(20);
        instance.VAT = 40;
        expect(instance.VAT).to.equal(40);
        expect(() => instance.VAT = '2').to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = -2).to.throw('VAT must be a non-negative number');
        expect(() => instance.VAT = -2).to.throw('VAT must be a non-negative number');
    });
    it('Test active', () => {
        expect(instance.active).to.equal(true);
        instance.active = false;
        expect(instance.active).to.equal(false);
        expect(() => instance.active = 0).to.throw('Active status must be a boolean');
    });
    it('Test toString', () => {
        function getString(name, value, VAT = 20, active = true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
              ].join('\n');
        }
        expect(instance.toString()).to.equal(getString('name', 100));
        instance.active = false;
        expect(instance.toString()).to.equal(getString('name', 100, 20, false));
    })
});



