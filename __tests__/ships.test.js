const Ship = require ('../src/ships');
const Port = require ('../src/ports');

describe('Ship', () => {
  it('Creates a Ship object', () => {
    ship = new Ship();

    expect(ship).toBeInstanceOf(Object);
  });

  it('Has a currentPort property', () => {
    port = new Port('Dover')
    ship = new Ship(port);

    expect(ship.currentPort).toEqual(port)
  });

  it('Can set sail', () => {
    port = new Port('Dover')
    ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it('Can dock at a different port', () => {
    dover = new Port('Dover');
    calais = new Port('Calais')
    ship = new Ship(dover)

    ship.dock(calais)

    expect(ship.currentPort).toEqual(calais)
  })
});
