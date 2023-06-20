const {HELLO_MESSAGE, GOODBYE_MESSAGE} = require('./constants');
// Stores the active TCP connection object.
let connection;
let currentDirection = 'start';

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const sendMove = function (move, oppositeMove) {
  console.log(`Move: ${move}`)
  if (currentDirection !== oppositeMove) {
    connection.write(`Move: ${move}`);
    currentDirection = move;
  }
};

const handleUserInput = function (event) {
  switch (event) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      sendMove('up', 'down');
      break;
    case 'a':
      sendMove('left', 'right');
      break;
    case 's':
      sendMove('down', 'up');
      break;
    case 'd':
      sendMove('right', 'left');
      break;
    case 'h':
      connection.write(HELLO_MESSAGE);
      break;
    case 'g':
      connection.write(GOODBYE_MESSAGE);
      break;
    default:
      // Handle unknown input
      break;
  }
};

module.exports = {
  setupInput
};