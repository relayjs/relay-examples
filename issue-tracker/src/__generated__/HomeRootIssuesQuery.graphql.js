/**
 * @flow
 * @relayHash aba6bef186c00347c3764a553584f2c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Issues_repository$ref = any;
export type HomeRootIssuesQueryVariables = {|
  owner: string,
  name: string,
|};
export type HomeRootIssuesQueryResponse = {|
  +repository: ?{|
    +owner: {|
      +login: string
    |},
    +name: string,
    +$fragmentRefs: Issues_repository$ref,
  |}
|};
export type HomeRootIssuesQuery = {|
  variables: HomeRootIssuesQueryVariables,
  response: HomeRootIssuesQueryResponse,
|};
*/

/*
query HomeRootIssuesQuery(
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
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v6 = [
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
      name: 'HomeRootIssuesQuery',
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
              selections: [(v2 /*: any*/)],
            },
            (v3 /*: any*/),
            {
              kind: 'FragmentSpread',
              name: 'Issues_repository',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'HomeRootIssuesQuery',
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
              selections: [(v4 /*: any*/), (v2 /*: any*/), (v5 /*: any*/)],
            },
            (v3 /*: any*/),
            {
              kind: 'LinkedField',
              alias: null,
              name: 'issues',
              storageKey: 'issues(first:10,states:["OPEN"])',
              args: (v6 /*: any*/),
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
                        (v5 /*: any*/),
                        {
                          kind: 'ScalarField',
                          alias: null,
                          name: 'title',
                          args: null,
                          storageKey: null,
                        },
                        (v4 /*: any*/),
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
              args: (v6 /*: any*/),
              handle: 'connection',
              key: 'Issues_issues',
              filters: ['states'],
            },
            (v5 /*: any*/),
          ],
        },
      ],
    },
    params: {
      operationKind: 'query',
      name: 'HomeRootIssuesQuery',
      id: null,
      text:
        'query HomeRootIssuesQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      login\n      id\n    }\n    name\n    ...Issues_repository\n    id\n  }\n}\n\nfragment Issues_repository on Repository {\n  issues(first: 10, states: [OPEN]) {\n    edges {\n      node {\n        id\n        title\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '8d0d29c887e77bdfb6f69994de491b78';
module.exports = node;
