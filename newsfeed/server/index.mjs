import http from 'http';

const PORT = 8080;
const server = http.createServer((req, res) => {
  console.log('request received: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({data: 'Hello, World!'}));
});

console.log('Starting server...');
server.listen(PORT).addListener('listening', () => {
  console.log('Server listening on port ' + PORT + '.');
});
