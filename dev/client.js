const net = require('net');
const { IP, PORT, PLAYER_NAME } = require('./constants');

class Client {
  constructor() {
    this.client = net.createConnection({ port: PORT, host: IP });
    this.client.setEncoding('utf8');
    this.initialize.apply(this, arguments);
  }

  connect() {
    this.client.on('connect', () => {
      console.log('Connected to the game server');
      this.client.write(PLAYER_NAME);
    });

    this.client.on('data', (data) => {
      console.log(data);
    });

    this.client.on('end', () => {
      console.log('Disconnected from the game server');
    });
  }
  initialize() {
    // fires on initialization
    this.connect();
  }
}

module.exports = Client;
