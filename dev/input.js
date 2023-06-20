const { HELLO_MESSAGE, GOODBYE_MESSAGE } = require('./constants');
const readline = require('readline');

class Input {
  constructor(client) {
    this.client = client;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  setupInput() {
    this.rl.on('line', (input) => {
      this.handleUserInput(input);
    });

    this.rl.on('SIGINT', () => {
      process.exit();
    });

    this.rl.setPrompt('Enter command: ');
    this.rl.prompt();
  }

  handleUserInput(input) {
    switch (input) {
      case 'w':
        this.sendMove('up', 'down');
        break;
      case 'a':
        this.sendMove('left', 'right');
        break;
      case 's':
        this.sendMove('down', 'up');
        break;
      case 'd':
        this.sendMove('right', 'left');
        break;
      case 'h':
        this.client.write(HELLO_MESSAGE);
        break;
      case 'g':
        this.client.write(GOODBYE_MESSAGE);
        break;
      default:
        // Handle unknown input
        break;
    }
  }

  sendMove(move, oppositeMove) {
    console.log(`Move: ${move}`);
    if (currentDirection !== oppositeMove) {
      this.client.write(`Move: ${move}`);
    }
  }
}

module.exports = Input;
