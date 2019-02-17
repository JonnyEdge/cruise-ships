(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype.addShip = function addShip(ship) {
    this.ships.push(ship);
    /* Overcomplicating the issue

    if (this.ships.length === 0) {
      this.ships[0] = ship;
    } else {
      this.ships[this.ships.length] = ship;
    };
    */
  };

  Port.prototype.removeShip = function removeShip(ship) {
    const shipLocation = this.ships.indexOf(ship);
    this.ships.splice((shipLocation), 1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
