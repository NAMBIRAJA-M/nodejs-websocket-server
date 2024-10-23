
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
  console.log('A New Client Connected');
     ws.send('Welcome! Greetings from server');
  
  ws.on('message', function(message) {
    console.log('Received message', message.toString());
    ws.send(`Server Received: ${message.toString()}`);
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

console.log('WebSocket is listening on port 3001');
