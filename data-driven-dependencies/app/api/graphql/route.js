import fs from 'fs';
import path from 'path';
import {graphql} from 'graphql';
import {schema, rootValue, dataDrivenDependencies} from '../../../lib/graphql.mjs';

const QUERY_MAP_FILE = path.resolve(process.cwd(), './queryMap.json');
const queryMap = JSON.parse(fs.readFileSync(QUERY_MAP_FILE, 'utf8'));

export async function POST(request) {
  const requestParams = await request.json();
  dataDrivenDependencies.reset();
  const response = await graphql({
    schema,
    rootValue,
    source: requestParams.id
      ? queryMap[requestParams.id]
      : requestParams.query,
    variableValues: requestParams.variables,
  });

  if (response?.errors != null) {
    console.error('GraphQL Server Errors', response.errors);
  }

  response.extensions = {
    modules: dataDrivenDependencies.getModules(),
  };

  return Response.json(response);
}

export async function OPTIONS() {
  return new Response(null, {status: 200});
}
