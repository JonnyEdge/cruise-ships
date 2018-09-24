function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;

  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function setSail() {
  if (this.currentPort !== null) {
    this.currentPort.removeShip(this);
    this.currentPort = null;
  } else {
    this.currentPort = null;
  }
  this.previousPort = this.currentPort;
};

Ship.prototype.dock = function dock() {
  const itinerary = this.itinerary;
  const previousIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousIndex + 1];
  this.currentPort.addShip(this);
};

module.exports = Ship;
