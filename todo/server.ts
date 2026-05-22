import {createServer} from 'node:http';
import {createYoga} from 'graphql-yoga';
import {getSchema} from './schema.ts';

const yoga = createYoga({schema: getSchema()});
const server = createServer(yoga);

const APP_PORT = 3000;
server.listen(APP_PORT, () => {
  console.log(`GraphQL server running at http://localhost:${APP_PORT}/graphql`);
});
