// Call into raw network fetch to get serializable GraphQL query response
// This response will be sent to the client to "warm" the QueryResponseCache

import {
  createOperationDescriptor,
  getRequest,
  GraphQLSingularResponse,
  GraphQLTaggedNode,
  IEnvironment,
  OperationDescriptor,
  OperationType,
} from "relay-runtime";
import { networkFetch } from "./environment";
import isServer from "./isServer";

let fetchID = 10000;

export type FetchQueryInfo = {
  operationDescriptor: OperationDescriptor;
  response: GraphQLSingularResponse;
  fetchID: number;
} & { __opaque: typeof FetchQueryInfoOpaque };

declare const FetchQueryInfoOpaque: unique symbol;

export type FetchQueryResult<TQuery extends OperationType> = {
  data: TQuery["response"];
  fetchQueryInfo: FetchQueryInfo;
};

// Server-only version on fetchQuery to avoid the client fetches.
export default async function fetchQuery<TQuery extends OperationType>(
  environment: IEnvironment,
  query: GraphQLTaggedNode,
  variables: TQuery["variables"]
): Promise<FetchQueryResult<TQuery>> {
  if (!isServer()) {
    throw new Error("fetchQuery should only be called on the server.");
  }

  const request = getRequest(query);
  const response = await networkFetch(request.params, variables);

  const operationDescriptor = createOperationDescriptor(request, variables);
  const data = response.data;

  if (data != null) {
    environment.commitPayload(operationDescriptor, data);
  }

  return {
    data: environment.lookup(operationDescriptor.fragment).data,
    fetchQueryInfo: createFetchQueryInfo(operationDescriptor, response),
  };
}

function createFetchQueryInfo(
  operationDescriptor: OperationDescriptor,
  response: GraphQLSingularResponse
): FetchQueryInfo {
  fetchID++;
  return {
    operationDescriptor,
    response,
    fetchID,
  } as FetchQueryInfo;
}
