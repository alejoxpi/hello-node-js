const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  var cadenaConexionPublica = process.env.PUBLIC_STRING_CONN;
  var cadenaConexionPrivada = process.env.PATH;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`IP Privada: ${cadenaConexionPrivada} \nIP Publica: ${cadenaConexionPublica} \n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});