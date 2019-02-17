(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype.addShip = function addShip(ship) {
    this.ships.push(ship);
  };

  Port.prototype.removeShip = function removeShip(ship) {
    const shipLocation = this.ships.indexOf(ship);
    if (shipLocation > -1) {
      this.ships.splice((shipLocation), 1);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
