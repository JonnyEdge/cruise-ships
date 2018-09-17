// import Ship from '../src/ships';
const Ship = require('../src/ships');

let ship = null;

test('a Ship object is created', () => {
  ship = new Ship();
  expect(ship).toBeInstanceOf(Object);
});

test('Adds a passenger property to the Ship object', () => {
  ship = new Ship();
  expect(ship.passengers).toEqual();
});

test('allows Ship to set sail from a defined starting port', () => {
  ship = new Ship()
  ship.setSail('Liverpool', 'Dover');
  expect(ship.startPort).toEqual('Liverpool');
});

test('allows Ship to set sail to a defined destination port', () => {
  ship = new Ship()
  ship.setSail('Liverpool', 'Dover');
  expect(ship.currentPort).toEqual('Dover');
});