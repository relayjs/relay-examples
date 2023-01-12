import "server-only";

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

const fetchedQueries: FetchedQuery[] = [];

export type FetchedQuery = Readonly<{
  operationDescriptor: OperationDescriptor;
  response: GraphQLSingularResponse;
}>;

export default async function fetchQuery<TQuery extends OperationType>(
  environment: IEnvironment,
  query: GraphQLTaggedNode,
  variables: TQuery["variables"]
): Promise<TQuery["response"]> {
  const request = getRequest(query);
  const response = await networkFetch(request.params, variables);

  const operationDescriptor = createOperationDescriptor(request, variables);
  const data = response.data;

  if (data != null) {
    environment.commitPayload(operationDescriptor, data);
  }
  fetchedQueries.push({ operationDescriptor, response });

  return environment.lookup(operationDescriptor.fragment).data;
}

export function getFetchedQueries(): readonly FetchedQuery[] {
  return fetchedQueries;
}
