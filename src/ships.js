function Port(name) {
  this.name = name;
}

function Ship(passengers, name) {
  this.passengers = passengers;
  this.startPort = new Port(name);
  this.currentPort = '';
};

Ship.prototype.setSail = function setSail(start, destination) {
  this.startPort = start;
  this.currentPort = destination;
};

Ship.prototype.dock = function dock(name) {
  this.currentPort = new Port(name);
}

module.exports = {
  Ship,
  Port,
};
