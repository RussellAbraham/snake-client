const Client = require('./client');
const Input = require('./input');

console.log('connecting...');

const client = new Client();
client.connect();

const input = new Input(client);
input.setupInput();
