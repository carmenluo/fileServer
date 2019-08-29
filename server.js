const net = require('net');
const server = net.createServer();
server.listen(3000,()=>{
  console.log(`I am listening at port 3000`);
})