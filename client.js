const net = require('net');

const on = function(object, callbacks){
  for(let callback in callbacks){
    object.on(callback, callbacks[callback]);
  }
};

const connect = function(){

  const conn = net.createConnection({
    host : '172.22.242.221',
    port : 50541
  });

  conn.setEncoding('utf8');
  
  on(conn, {
    'lookup' (data) { console.log(`lookup : ${data}`); },
    'connect' (data) { 
      console.log(`Successfully connected to game server`);
       conn.write('Name: SNK');
    },
    'ready' (data) { console.log(`Ready : ${data}`); },
    'data' (data) { console.log(`Handled : ${data}`); },
    'close' (data) { console.log(`Disconnected : ${data}`); }
  });

  //conn.on('lookup', (data) => {
  //  console.log(`lookup : ${data}`);
  //});
  //conn.on('connect', (data) => {
  //  console.log(`Connected : ${data}`);
  //});
  //conn.on('ready', (data) => {
  //  console.log(`Ready : ${data}`);
  //});
  //conn.on('data', (data) => {
  //  console.log(`Handled : ${data}`);
  //});
  //conn.on('close', (data)=>{
  //  console.log(`Disconnected : ${data}`);
  //});

  return conn;
};

module.exports = {
  connect
};