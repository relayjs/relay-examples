// This file is just an example to test compiler changes and relay runtime setup

import { graphql, fetchQuery } from "relay-runtime";
import { createEnvironment } from "./environment";
import {
  exampleQuery,
  exampleQuery$data,
} from "./__generated__/exampleQuery.graphql";

export function exampleFetch(): Promise<exampleQuery$data> {
  const environment = createEnvironment();
  return fetchQuery<exampleQuery>(
    environment,
    graphql`
      query exampleQuery {
        viewer {
          __typename
          actor {
            __typename
            name
          }
        }
      }
    `,
    {}
  ).toPromise();
}
