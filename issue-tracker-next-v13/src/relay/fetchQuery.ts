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

const fetchRecords: FetchRecord[] = [];

export type FetchRecord = {
  operationDescriptor: OperationDescriptor;
  response: GraphQLSingularResponse;
} & { __opaque: typeof FetchRecordOpaque };

declare const FetchRecordOpaque: unique symbol;

export type FetchQueryResult<TQuery extends OperationType> = {
  data: TQuery["response"];
  fetchRecord: FetchRecord;
};

// Server-only version on fetchQuery to avoid the client fetches.
export default async function fetchQuery<TQuery extends OperationType>(
  environment: IEnvironment,
  query: GraphQLTaggedNode,
  variables: TQuery["variables"]
): Promise<TQuery["response"]> {
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
  fetchRecords.push(createFetchRecord(operationDescriptor, response));

  return environment.lookup(operationDescriptor.fragment).data;
}

function createFetchRecord(
  operationDescriptor: OperationDescriptor,
  response: GraphQLSingularResponse
): FetchRecord {
  return {
    operationDescriptor,
    response,
  } as FetchRecord;
}

export function getFetchRecords(): readonly FetchRecord[] {
  return fetchRecords;
}
