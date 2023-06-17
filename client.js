const net = require('net');

const on = function(object, callbacks){
  for(let callback in callbacks){
    object.on(callback, callbacks[callback]);
  }
};

const connect = function(){

  const conn = net.createConnection({
    host : '172.22.248.118',
    port : 50541
  });

  conn.setEncoding('utf8');
  
  on(conn, {

    'data' (data) {       
      console.log(`Handled : ${data}`); 
    },

    'connect' () { 
      console.log(`Successfully connected to game server`);   
      conn.write('Name: SNK');
      // setInterval(()=>{ conn.write("Move: up"); }, 1000);
    }

  });

  return conn;
};

module.exports = {
  connect
};