const Ship = require('../src/ships');
const Port = require('../src/ports');

describe('Ship', () => {
  describe('Set up with ports and itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      dover = {
        ...port,
        name: 'Dover',
        ships: [],
      };
      calais = {
        ...port,
        name: 'Calais',
        ships: [],
      };
      itinerary = {
        ports: [dover, calais]
      }
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
      expect(dover.removeShip).toHaveBeenCalledWith();
    });

    it('Gets added to port on instantiation', () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });

  it('Can dock at a different port', () => {
    const port = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };
    const dover = {
      ...port,
      name: 'Dover',
      ships: [],
    };
    const calais = {
      ...port,
      name: 'Calais',
      ships: [],
    };
    const itinerary = {
      ports: [dover, calais]
    }
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(dover);
    expect(dover.ships).toBeInstanceOf(Array);
  });
});
