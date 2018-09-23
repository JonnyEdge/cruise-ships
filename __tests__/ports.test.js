const Port = require('../src/ports');

describe('Port', () => {
  it('Creates a Port object', () => {
    const port = new Port();

    expect(port).toBeInstanceOf(Object);
  });

  it('Has a name property', () => {
    const port = new Port('Dover');

    expect(port.name).toEqual('Dover');
  });

  it('Can add a ship', () => {
    const port = new Port('Dover');
    const titanic = {};

    port.addShip(titanic);

    expect(port.ships).toContain(titanic);
  });

  it('Can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const titanic2 = {};

    port.addShip(titanic);
    port.addShip(titanic2);
    port.removeShip(titanic2);

    expect(port.ships).toEqual([titanic]);
  })
});
