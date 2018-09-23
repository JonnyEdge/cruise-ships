const Port = require('../src/ports');

describe('Port', () => {
  it('Creates a Port object', () => {
    const port = new Port();

    expect(port).toBeInstanceOf(Object);
  });

  it('Has a name property', () => {
    const port = new Port('Dover');

    expect(port.name).toEqual('Dover')
  })
});
