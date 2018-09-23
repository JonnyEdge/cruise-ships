const Port = require('../src/ports');

describe('Port', () => {
  it('Creates a Port object', () => {
    port = new Port();

    expect(port).toBeInstanceOf(Object);
  });

  it('Has a name property', () => {
    port = new Port('Dover');

    expect(port.name).toEqual('Dover')
  })
});
