const { connect } = require('./client');

console.log('connecting...');

// connect();

// Call the connect function
const connection = connect();

// Now you can use the 'connection' object to interact with the server
// For example, you can send data to the server using connection.write()
// or listen for server events using connection.on()

// Example: Sending data to the server
connection.write('Hello, server!');

// Example: Listening for server events
connection.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
});

// Remember to handle any errors or close the connection when you're done
// For example, you can listen for the 'close' event to handle disconnection
connection.on('close', () => {
  console.log('Disconnected from the server');
});