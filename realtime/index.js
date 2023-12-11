// realtime/index.js

const WebSocket = require('ws');
const RealTimeUpdatesService = require('./RealTimeUpdatesService');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Initialize the RealTimeUpdatesService
const realTimeUpdatesService = new RealTimeUpdatesService();

// Handle WebSocket connection
wss.on('connection', (ws) => {
  // Add the WebSocket connection to the RealTimeUpdatesService
  realTimeUpdatesService.addConnection(ws);

  // Handle WebSocket message
  ws.on('message', (message) => {
    // Process the message received from the WebSocket connection
    realTimeUpdatesService.processMessage(ws, message);
  });

  // Handle WebSocket close
  ws.on('close', () => {
    // Remove the WebSocket connection from the RealTimeUpdatesService
    realTimeUpdatesService.removeConnection(ws);
  });
});
