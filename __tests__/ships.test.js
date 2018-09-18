const {
  Ship,
  Port,
  Itinerary,
} = require('../src/ships');

let ship = null;
let port = null;
let itinerary = null;

test('A Ship object is created', () => {
  ship = new Ship();
  expect(ship).toBeInstanceOf(Object);
});

test('A Port object is created', () => {
  port = new Port();
  expect(port).toBeInstanceOf(Object);
});

test('An Itinerary object is created', () => {
  itinerary = new Itinerary();
  expect(itinerary).toBeInstanceOf(Object);
});

test('Adds a passenger property to the Ship object', () => {
  ship = new Ship();
  expect(ship.passengers).toEqual();
});

test('Adds a ports property to the Itinerary object', () => {
  itinerary = new Itinerary();
  expect(itinerary.ports).toEqual('');
});

test('Passes a name to the Port object name property', () => {
  port = new Port('Liverpool');
  expect(port.name).toEqual('Liverpool');
});

test('Allows Ship to set sail from a defined starting port', () => {
  ship = new Ship()
  ship.setSail('Liverpool', 'Dover');
  expect(ship.startPort).toEqual('Liverpool');
});

test('Allows Ship to set sail to a defined destination port', () => {
  ship = new Ship()
  ship.setSail('Liverpool', 'Dover');
  expect(ship.currentPort).toEqual('Dover');
});

test('Creates a new Port object and assigns to the startPort property of Ship object', () => {
  ship = new Ship('', 'Liverpool')
  expect(ship.startPort.name).toEqual('Liverpool');
});

test('Creates two new Port objects, one for the startPort, one for the docked port', () => {
  ship = new Ship('', 'Liverpool')
  ship.dock('Dover')
  expect(ship.currentPort.name).toEqual('Dover');
});

test('Running setSail after dock function populates the previousPort property', () => {
  ship = new Ship('', 'Liverpool')
  ship.dock('Liverpool')
  ship.setSail(ship.currentPort, 'Dover')
  expect(ship.previousPort.name).toEqual('Liverpool');
});

test('Running setSail without dock function does not populate the previousPort property', () => {
  ship = new Ship('', 'Liverpool')
  ship.setSail(ship.currentPort, 'Dover')
  expect(ship.previousPort).toEqual(null);
});
