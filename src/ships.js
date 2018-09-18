function Port(name) {
  this.name = name;
}

function Itinerary() {
  this.ports = '';
}

function Ship(passengers, portName) {
  this.passengers = passengers;
  this.startPort = new Port(portName);
  this.previousPort = null;
  this.currentPort = null;
};

Ship.prototype.setSail = function setSail(start, destination) {
  this.previousPort = this.currentPort;
  this.startPort = start;
  this.currentPort = destination;
};

Ship.prototype.dock = function dock(name) {
  this.currentPort = new Port(name);
}

module.exports = {
  Ship,
  Port,
  Itinerary,
};
