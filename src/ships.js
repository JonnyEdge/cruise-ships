function Ship(passengers) {
  this.passengers = passengers;
  this.startPort = '';
  this.currentPort = '';
};

Ship.prototype.setSail = function setSail(start, destination) {
  this.startPort = start;
  this.currentPort = destination;
};

// export default Ship;

module.exports = Ship;
