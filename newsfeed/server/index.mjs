import http from "http";
import { execute, validate, validateSchema, parse } from "graphql";
import { schema } from "./schema.mjs";
import { rootValue } from "./resolvers.mjs";

// This is graphqlImpl from graphql/graphql.mjs but with
// execute in place of execute.
// See https://github.com/graphql/graphql-js/blob/a358757e7b66189f6711ef3229340e6bf4d3c93f/website/docs/tutorials/defer-stream.md
function graphql(args) {
  const {
    schema,
    source,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver,
  } = args;
  // Validate Schema
  const schemaValidationErrors = validateSchema(schema);
  if (schemaValidationErrors.length > 0) {
    return { errors: schemaValidationErrors };
  }
  // Parse
  let document;
  try {
    document = parse(source);
  } catch (syntaxError) {
    return { errors: [syntaxError] };
  }
  // Validate
  const validationErrors = validate(schema, document);
  if (validationErrors.length > 0) {
    return { errors: validationErrors };
  }
  // Execute
  return execute({
    schema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver,
  });
}

function sleep(s) {
  return new Promise((r) => {
    setTimeout(r, s);
  });
}

const PORT = 8080;
const server = http.createServer(async (req, res) => {
  console.log("request received: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });

  let response = { data: null };
  if (req.method === "POST") {
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
    console.error("GraphQL Server Errors", response.errors);
  }

  // Wait 1 second to make loading states perceptible:
  await sleep(1000);

  res.end(JSON.stringify(response));
});

console.log("Starting server...");
server.listen(PORT).addListener("listening", () => {
  console.log("Server listening on port " + PORT + ".");
});
