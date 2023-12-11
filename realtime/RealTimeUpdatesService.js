// realtime/RealTimeUpdatesService.js

class RealTimeUpdatesService {
  constructor() {
    this.connections = new Set();
  }

  addConnection(connection) {
    this.connections.add(connection);
  }

  removeConnection(connection) {
    this.connections.delete(connection);
  }

  processMessage(connection, message) {
    // Process the message received from the WebSocket connection
    // You can add your custom logic here
  }

  broadcastMessage(message) {
    this.connections.forEach((connection) => {
      connection.send(message);
    });
  }
}

module.exports = RealTimeUpdatesService;
