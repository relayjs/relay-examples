import {
  GraphQLResponse,
  OperationType,
  RequestParameters,
  VariablesOf,
} from "relay-runtime";
import { ConcreteRequest } from "relay-runtime/lib/util/RelayConcreteNode";
import { networkFetch } from "./environment";

export interface SerializablePreloadedQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
> {
  params: TRequest["params"];
  variables: VariablesOf<TQuery>;
  response: GraphQLResponse;
}

// Call into raw network fetch to get serializable GraphQL query response
// This response will be sent to the client to "warm" the QueryResponseCache
// to avoid the client fetches.
export default async function loadSerializableQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
>(
  params: RequestParameters,
  variables: VariablesOf<TQuery>
): Promise<SerializablePreloadedQuery<TRequest, TQuery>> {
  const response = await networkFetch(params, variables);
  return {
    params,
    variables,
    response,
  };
}
