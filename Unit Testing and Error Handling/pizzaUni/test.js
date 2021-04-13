let { expect } = require('chai');
let pizzUni = require('./solution')

describe('Test pizzUni', () => {
  it("Test makeAnOrder With Pizza and Drink", function () {
    expect(pizzUni.makeAnOrder({
      orderedPizza: "Capresse",
      orderedDrink: "Cola",
    })).to.equal('You just ordered Capresse and Cola.');
  });
  it("Test makeAnOrder With Pizza", function () {
    let order = pizzUni.makeAnOrder({
      orderedPizza: "Capresse",
    });
    expect(order).to.deep.equal("You just ordered Capresse");
  });
  it("Test makeAnOrder only drink", function () {
    expect(() => pizzUni.makeAnOrder({
      orderedDrink: "Cola",
    })).to.throw('You must order at least 1 Pizza to finish the order.');
  });
  it("Test getRemainingWork all ready", function () {
    let order = pizzUni.getRemainingWork([{ pizzaName: 'Capresse', status: 'ready' }]);
    expect(order).to.deep.equal(`All orders are complete!`);
  });
  it("Test getRemainingWork still preparing", function () {
    let order = pizzUni.getRemainingWork([
      { pizzaName: "Italiano", status: "preparing" },
      { pizzaName: "Caprese", status: "preparing" },
    ]);
    expect(order).to.deep.equal(`The following pizzas are still preparing: Italiano, Caprese.`);
  });
  it('Test orderType Carry Out', function () {
    let order = pizzUni.orderType(100, 'Carry Out');
    expect(order).to.deep.equal(90);
  });
  it('Test orderType Delivery', function () {
    let order = pizzUni.orderType(100, 'Delivery');
    expect(order).to.deep.equal(100);
  });
});

