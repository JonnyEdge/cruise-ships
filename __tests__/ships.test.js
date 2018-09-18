const {
  Ship,
  Port,
} = require('../src/ships');

let ship = null;
let port = null;

test('A Ship object is created', () => {
  ship = new Ship();
  expect(ship).toBeInstanceOf(Object);
});

test('A Port object is created', () => {
  port = new Port();
  expect(port).toBeInstanceOf(Object);
});

test('Adds a passenger property to the Ship object', () => {
  ship = new Ship();
  expect(ship.passengers).toEqual();
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
})

test('Creates two new Port objects, one for the startPort, one for the docked port', () => {
  ship = new Ship('', 'Liverpool')
  ship.dock('Dover')
  expect(ship.currentPort.name).toEqual('Dover');
});