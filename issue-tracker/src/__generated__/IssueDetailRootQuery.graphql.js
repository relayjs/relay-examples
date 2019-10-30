/**
 * @flow
 * @relayHash aaa90e4d31366894eab251f5efc57ebf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IssueDetailRootQueryVariables = {|
  id: string,
  owner: string,
  name: string,
|};
export type IssueDetailRootQueryResponse = {|
  +repository: ?{|
    +owner: {|
      +login: string
    |},
    +name: string,
  |},
  +node: ?{|
    +title?: string,
    +number?: number,
    +author?: ?{|
      +login: string
    |},
    +body?: string,
    +closed?: boolean,
  |},
|};
export type IssueDetailRootQuery = {|
  variables: IssueDetailRootQueryVariables,
  response: IssueDetailRootQueryResponse,
|};
*/

/*
query IssueDetailRootQuery(
  $id: ID!
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    owner {
      __typename
      login
      id
    }
    name
    id
  }
  node(id: $id) {
    __typename
    ... on Issue {
      title
      number
      author {
        __typename
        login
        ... on Node {
          id
        }
      }
      body
      closed
    }
    id
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'id',
        type: 'ID!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'owner',
        type: 'String!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'name',
        type: 'String!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'name',
        variableName: 'name',
      },
      {
        kind: 'Variable',
        name: 'owner',
        variableName: 'owner',
      },
    ],
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'login',
      args: null,
      storageKey: null,
    },
    v3 = [(v2 /*: any*/)],
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v5 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v6 = {
      kind: 'ScalarField',
      alias: null,
      name: 'title',
      args: null,
      storageKey: null,
    },
    v7 = {
      kind: 'ScalarField',
      alias: null,
      name: 'number',
      args: null,
      storageKey: null,
    },
    v8 = {
      kind: 'ScalarField',
      alias: null,
      name: 'body',
      args: null,
      storageKey: null,
    },
    v9 = {
      kind: 'ScalarField',
      alias: null,
      name: 'closed',
      args: null,
      storageKey: null,
    },
    v10 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    v11 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v12 = [(v10 /*: any*/), (v2 /*: any*/), (v11 /*: any*/)];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'IssueDetailRootQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'repository',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: 'Repository',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'owner',
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: (v3 /*: any*/),
            },
            (v4 /*: any*/),
          ],
        },
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: (v5 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                (v6 /*: any*/),
                (v7 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'author',
                  storageKey: null,
                  args: null,
                  concreteType: null,
                  plural: false,
                  selections: (v3 /*: any*/),
                },
                (v8 /*: any*/),
                (v9 /*: any*/),
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'IssueDetailRootQuery',
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'repository',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: 'Repository',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'owner',
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: (v12 /*: any*/),
            },
            (v4 /*: any*/),
            (v11 /*: any*/),
          ],
        },
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: (v5 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            (v10 /*: any*/),
            (v11 /*: any*/),
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                (v6 /*: any*/),
                (v7 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'author',
                  storageKey: null,
                  args: null,
                  concreteType: null,
                  plural: false,
                  selections: (v12 /*: any*/),
                },
                (v8 /*: any*/),
                (v9 /*: any*/),
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: 'query',
      name: 'IssueDetailRootQuery',
      id: null,
      text:
        'query IssueDetailRootQuery(\n  $id: ID!\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      login\n      id\n    }\n    name\n    id\n  }\n  node(id: $id) {\n    __typename\n    ... on Issue {\n      title\n      number\n      author {\n        __typename\n        login\n        ... on Node {\n          id\n        }\n      }\n      body\n      closed\n    }\n    id\n  }\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '5a5b32b7de101451a5ad78f570b78027';
module.exports = node;
