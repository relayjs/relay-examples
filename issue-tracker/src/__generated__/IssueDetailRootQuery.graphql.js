/**
 * @flow
 * @relayHash bb43032c4bc1c63cd81ece302e01dd76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Issues_repository$ref = any;
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
    +$fragmentRefs: Issues_repository$ref,
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
    ...Issues_repository
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

fragment Issues_repository on Repository {
  issues(first: 10, states: [OPEN]) {
    edges {
      node {
        id
        title
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
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
    v12 = [(v10 /*: any*/), (v2 /*: any*/), (v11 /*: any*/)],
    v13 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
      },
      {
        kind: 'Literal',
        name: 'states',
        value: ['OPEN'],
      },
    ];
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
            {
              kind: 'FragmentSpread',
              name: 'Issues_repository',
              args: null,
            },
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
            {
              kind: 'LinkedField',
              alias: null,
              name: 'issues',
              storageKey: 'issues(first:10,states:["OPEN"])',
              args: (v13 /*: any*/),
              concreteType: 'IssueConnection',
              plural: false,
              selections: [
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'edges',
                  storageKey: null,
                  args: null,
                  concreteType: 'IssueEdge',
                  plural: true,
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'node',
                      storageKey: null,
                      args: null,
                      concreteType: 'Issue',
                      plural: false,
                      selections: [
                        (v11 /*: any*/),
                        (v6 /*: any*/),
                        (v10 /*: any*/),
                      ],
                    },
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'cursor',
                      args: null,
                      storageKey: null,
                    },
                    {
                      kind: 'ClientExtension',
                      selections: [
                        {
                          kind: 'ScalarField',
                          alias: null,
                          name: '__id',
                          args: null,
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'pageInfo',
                  storageKey: null,
                  args: null,
                  concreteType: 'PageInfo',
                  plural: false,
                  selections: [
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'endCursor',
                      args: null,
                      storageKey: null,
                    },
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'hasNextPage',
                      args: null,
                      storageKey: null,
                    },
                  ],
                },
              ],
            },
            {
              kind: 'LinkedHandle',
              alias: null,
              name: 'issues',
              args: (v13 /*: any*/),
              handle: 'connection',
              key: 'Issues_issues',
              filters: ['states'],
            },
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
        'query IssueDetailRootQuery(\n  $id: ID!\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      login\n      id\n    }\n    name\n    ...Issues_repository\n    id\n  }\n  node(id: $id) {\n    __typename\n    ... on Issue {\n      title\n      number\n      author {\n        __typename\n        login\n        ... on Node {\n          id\n        }\n      }\n      body\n      closed\n    }\n    id\n  }\n}\n\nfragment Issues_repository on Repository {\n  issues(first: 10, states: [OPEN]) {\n    edges {\n      node {\n        id\n        title\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '531afb59939c8e0d26b861054e965e27';
module.exports = node;
