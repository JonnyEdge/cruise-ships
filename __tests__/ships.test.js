const Ship = require ('../src/ships');

describe('Ship', () => {
  it('Creates a Ship object', () => {
    ship = new Ship();

    expect(ship).toBeInstanceOf(Object);
  });

  it('Has a currentPort property', () => {
    ship = new Ship('Dover');

    expect(ship.currentPort).toEqual('Dover')
  });

  it('Can set sail', () => {
    ship = new Ship('Dover');

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  })
});
