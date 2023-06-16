const net = require('net');

const connect = function(){
  const conn = net.createConnection({
    host : '172.22.242.221',
    port : 50541
  });

  conn.setEncoding('utf8');
  
  conn.on('lookup', (data) => {
    console.log(`lookup : ${data}`);
  });

  conn.on('connect', (data) => {
    console.log(`Connected : ${data}`);
  });

  conn.on('ready', (data) => {
    console.log(`Ready : ${data}`);
  });

  conn.on('data', (data) => {
    console.log(`Handled : ${data}`);
  });

  conn.on('close', (data)=>{
    console.log(`Disconnected : ${data}`);
  });

  return conn;
};

console.log('connecting...');

connect();
