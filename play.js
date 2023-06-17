const { connect } = require('./client');

console.log('connecting...');

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
    console.log('w was pressed')
  }
};

setupInput(connect());
