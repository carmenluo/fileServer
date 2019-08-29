const net = require('net');
const conn = net.createConnection({
  //  host: '172.46.1.67',
    host:'localhost',
    port: 3000
  });
  conn.setEncoding('utf8');
  conn.on("connect",()=>{
    console.log(`I am connected now!`);
  })