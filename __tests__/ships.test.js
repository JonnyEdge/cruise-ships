const Ship = require('../src/ships');
const Port = require('../src/ports');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  describe('Set up with ports and itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });

    it('Creates a Ship object', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('Has a currentPort property', () => {
      expect(ship.currentPort).toEqual(dover);
    });

    it('Can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });

    it('Gets added to port on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });
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
});
