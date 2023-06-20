const net = require('net');
const { IP, PORT, PLAYER_NAME } = require("./constants");

const on = function(object, callbacks){
  for(let callback in callbacks){
    object.on(callback, callbacks[callback]);
  }
};

const connect = function(){

  const conn = net.createConnection({
    host : IP,
    port : PORT
  });

  conn.setEncoding('utf8');
  
  on(conn, {

    'data' (data) {       
      console.log(`Handled : ${data}`); 
    },

    'connect' () { 
      console.log(`Successfully connected to game server`);   
      conn.write(PLAYER_NAME);
    },

    'end' () {
      console.log('Disconnected from the game server.');
    }

  });

  return conn;
};

module.exports = {
  connect
};