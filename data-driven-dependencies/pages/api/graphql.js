import fs from 'fs';
import {graphql} from 'graphql';
import {schema, rootValue, dataDrivenDependencies} from '../../lib/graphql.mjs';
import path from 'path';
import getConfig from 'next/config';

const QUERY_MAP_FILE = path.resolve(
  getConfig().serverRuntimeConfig.projectRoot,
  './queryMap.json',
);
const queryMap = JSON.parse(fs.readFileSync(QUERY_MAP_FILE, 'utf8'));

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  let response = {data: null};
  if (req.method === 'POST') {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const requestParams = JSON.parse(Buffer.concat(buffers).toString());
    dataDrivenDependencies.reset();
    let source;
    if (requestParams.id != null) {
      if (typeof requestParams.id !== 'string' || !queryMap.hasOwnProperty(requestParams.id)) {
        res.end(JSON.stringify({errors: [{message: 'Invalid query ID'}]}));
        return;
      }
      source = queryMap[requestParams.id];
    } else {
      res.end(JSON.stringify({errors: [{message: 'Query ID is required'}]}));
      return;
    }
    response = await graphql({
      schema,
      rootValue,
      source,
      variableValues: requestParams.variables,
    });
  }
  if (response?.errors != null) {
    console.error('GraphQL Server Errors', response.errors);
  }

  response.extensions = {
    modules: dataDrivenDependencies.getModules(),
  };

  res.end(JSON.stringify(response));
}

export const config = {
  api: {
    bodyParser: false,
  },
};
