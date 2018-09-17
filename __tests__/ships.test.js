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