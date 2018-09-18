function Port(name) {
  this.name = name;
}

function Itinerary(portName1, portName2) {
  this.ports = [new Port(portName1), new Port(portName2)];
}

function Ship(passengers, portName1, portName2) {
  this.passengers = passengers;
  this.itinerary = new Itinerary(portName1, portName2);
  this.startPort = this.itinerary[0];
  this.previousPort = null;
  this.currentPort = this.itinerary[1];
};

Ship.prototype.setSail = function setSail(start, destination) {
  this.previousPort = this.currentPort;
  this.startPort = start;
  this.currentPort = destination;
};

Ship.prototype.dock = function dock(name) {
  this.currentPort = this.itinerary[1];
}

module.exports = {
  Ship,
  Port,
  Itinerary,
};
