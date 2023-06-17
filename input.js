// Stores the active TCP connection object.
let connection;

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

const handleUserInput = function (event) {
  if(event === '\u0003'){
    process.exit();
  } 
  let currentDirection = 'start';
  if(event === 'w'){
    console.log('Move: up');
    currentDirection === 'up';
    if(currentDirection !== 'down'){
      connection.write('Move: up');
    }
  }
  if(event === 'a'){
    console.log('Move: left');
    currentDirection = 'left';
    if(currentDirection !== 'right'){
      connection.write('Move: left');
    }
  }
  if(event === 's'){
    console.log('Move: down');
    currentDirection = 'down';
    if(currentDirection !== 'up'){
      connection.write('Move: down');
    }
  }
  if(event === 'd'){
    console.log('Move: right');
    currentDirection = 'right';
    if(currentDirection !== 'left'){
      connection.write('Move: right');
    }
  }
};

module.exports = {
  setupInput
};