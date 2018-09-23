function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;

  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function setSail() {
  this.currentPort.removeShip();
  this.previousPort = this.currentPort;
  this.currentPort = null;
};

Ship.prototype.dock = function dock() {
  const itinerary = this.itinerary;
  const previousIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousIndex + 1];
  this.currentPort.addShip(this);
};

module.exports = Ship;
