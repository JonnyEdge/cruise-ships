const Ship = require('../src/ships');
const Port = require('../src/ports');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  it('Creates a Ship object', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it('Has a currentPort property', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toEqual(port);
  });

  it('Can set sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(port.ships).not.toContain(ship);
  });

  it('Can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });

  it('Gets added to port on instantiation', () => {
    const dover = new Port('Dover')
    const itinerary = new Itinerary([dover])
    const ship = new Ship (itinerary)

    expect(dover.ships).toContain(ship);
  })
});
