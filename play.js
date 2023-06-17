const { connect } = require('./client');
const setupInput = require('./input');

console.log('connecting...');

setupInput(connect());