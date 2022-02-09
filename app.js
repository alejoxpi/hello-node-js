const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('IP Privada: mongodb://mongoadmin:8Tj38d9BFhqDhy3x@3.133.124.221:27017/?authSource=admin \n IP Publica: mongodb://mongoadmin:8Tj38d9BFhqDhy3x@3.133.124.221:27017/?authSource=admin \n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});