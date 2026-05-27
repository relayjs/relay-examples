import {
  ConcreteRequest,
  GraphQLResponse,
  OperationType,
  RequestParameters,
  VariablesOf,
} from "relay-runtime";
import { networkFetch } from "./environment";

export interface SerializablePreloadedQuery<TQuery extends OperationType> {
  params: RequestParameters;
  variables: VariablesOf<TQuery>;
  response: GraphQLResponse;
}

// Call into raw network fetch to get serializable GraphQL query response
// This response will be sent to the client to "warm" the QueryResponseCache
// to avoid the client fetches.
export default async function loadSerializableQuery<
  TQuery extends OperationType
>(
  query: ConcreteRequest,
  variables: VariablesOf<TQuery>
): Promise<SerializablePreloadedQuery<TQuery>> {
  const response = await networkFetch(query.params, variables);
  return {
    params: query.params,
    variables,
    response,
  };
}
