import http from 'http';
import {graphql} from 'graphql';
import {schema} from './schema.mjs';
import {rootValue} from './resolvers.mjs';

const PORT = 8080;
const server = http.createServer(async (req, res) => {
  console.log('request received: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});

  let response = {data: null};
  if (req.method === 'POST') {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const requestParams = JSON.parse(Buffer.concat(buffers).toString());
    response = await graphql({
      schema,
      rootValue,
      source: requestParams.query,
      variableValues: requestParams.variables,
    });
  }
  if (response?.errors != null) {
    console.error('GraphQL Server Errors', response.errors);
  }

  res.end(JSON.stringify(response));
});

console.log('Starting server...');
server.listen(PORT).addListener('listening', () => {
  console.log('Server listening on port ' + PORT + '.');
});
