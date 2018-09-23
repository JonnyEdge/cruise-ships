function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  const shipsIndex = this.ships.indexOf();
  this.ships[shipsIndex + 1] = ship;
};

Port.prototype.removeShip = function removeShip(ship) {
  const shipsIndex = this.ships.indexOf();
  if (this.ships[shipsIndex] === ship) {
    this.ships.splice(shipsIndex, 1)
  };
};

module.exports = Port;
