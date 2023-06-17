// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function () {
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
  if(event === 'w'){
    console.log('Move: up');
  }
  if(event === 'a'){
    console.log('Move: left');
  }
  if(event === 's'){
    console.log('Move: down');
  }
  if(event === 'd'){
    console.log('Move: right');
  }
};

module.exports = {
  setupInput
};