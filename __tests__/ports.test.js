const Port = require('../src/ports');

describe('Port', () => {
  describe('Set up with port', () => {
    let port

    beforeEach(() => {
      port = new Port('Dover')
    })
    
    it('Creates a Port object', () => {
      expect(port).toBeInstanceOf(Object);
    });
  
    it('Has a name property', () => {
      expect(port.name).toEqual('Dover');
    });
  
    it('Can add a ship', () => {
      const titanic = {};
  
      port.addShip(titanic);
  
      expect(port.ships).toContain(titanic);
    });
  
    it('Can remove a ship', () => {
      const titanic = {};
      const titanic2 = {};
  
      port.addShip(titanic);
      port.addShip(titanic2);
      port.removeShip(titanic2);
  
      expect(port.ships).toEqual([titanic]);
    })

  })
});
