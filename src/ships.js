function Ship(currentPort) {
  this.currentPort = currentPort
};

Ship.prototype.setSail = function setSail(destinationPort) {
  this.currentPort = destinationPort;
}

Ship.prototype.dock = function dock(destinationPort) {
  this.currentPort = destinationPort;
}

module.exports = Ship;
