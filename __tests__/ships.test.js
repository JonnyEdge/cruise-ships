const Ship = require ('../src/ships');

describe('Ship', () => {
  it('Creates a Ship object', () => {
    ship = new Ship();

    expect(ship).toBeInstanceOf(Object);
  });

  it('Has a startPort property', () => {
    ship = new Ship('Dover');

    expect(ship.startPort).toEqual('Dover')
  })
});
