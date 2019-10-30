/**
 * @flow
 * @relayHash f0aa55683059dc236ee106eadb649ef9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type IssueDetailComments_issue$ref = any;
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
      +login: string,
      +avatarUrl: any,
    |},
    +body?: string,
    +closed?: boolean,
    +url?: any,
    +$fragmentRefs: IssueDetailComments_issue$ref,
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
        avatarUrl
        ... on Node {
          id
        }
      }
      body
      closed
      url
      ...IssueDetailComments_issue
    }
    id
  }
}

fragment IssueDetailComments_issue on Issue {
  comments(first: 10) {
    edges {
      node {
        id
        author {
          __typename
          login
          avatarUrl
          ... on Node {
            id
          }
        }
        body
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
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v4 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v5 = {
      kind: 'ScalarField',
      alias: null,
      name: 'title',
      args: null,
      storageKey: null,
    },
    v6 = {
      kind: 'ScalarField',
      alias: null,
      name: 'number',
      args: null,
      storageKey: null,
    },
    v7 = {
      kind: 'ScalarField',
      alias: null,
      name: 'avatarUrl',
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
      name: 'url',
      args: null,
      storageKey: null,
    },
    v11 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    v12 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v13 = {
      kind: 'LinkedField',
      alias: null,
      name: 'author',
      storageKey: null,
      args: null,
      concreteType: null,
      plural: false,
      selections: [
        (v11 /*: any*/),
        (v2 /*: any*/),
        (v7 /*: any*/),
        (v12 /*: any*/),
      ],
    },
    v14 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
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
              selections: [(v2 /*: any*/)],
            },
            (v3 /*: any*/),
          ],
        },
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: (v4 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                (v5 /*: any*/),
                (v6 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'author',
                  storageKey: null,
                  args: null,
                  concreteType: null,
                  plural: false,
                  selections: [(v2 /*: any*/), (v7 /*: any*/)],
                },
                (v8 /*: any*/),
                (v9 /*: any*/),
                (v10 /*: any*/),
                {
                  kind: 'FragmentSpread',
                  name: 'IssueDetailComments_issue',
                  args: null,
                },
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
              selections: [(v11 /*: any*/), (v2 /*: any*/), (v12 /*: any*/)],
            },
            (v3 /*: any*/),
            (v12 /*: any*/),
          ],
        },
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: (v4 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            (v11 /*: any*/),
            (v12 /*: any*/),
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                (v5 /*: any*/),
                (v6 /*: any*/),
                (v13 /*: any*/),
                (v8 /*: any*/),
                (v9 /*: any*/),
                (v10 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'comments',
                  storageKey: 'comments(first:10)',
                  args: (v14 /*: any*/),
                  concreteType: 'IssueCommentConnection',
                  plural: false,
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'edges',
                      storageKey: null,
                      args: null,
                      concreteType: 'IssueCommentEdge',
                      plural: true,
                      selections: [
                        {
                          kind: 'LinkedField',
                          alias: null,
                          name: 'node',
                          storageKey: null,
                          args: null,
                          concreteType: 'IssueComment',
                          plural: false,
                          selections: [
                            (v12 /*: any*/),
                            (v13 /*: any*/),
                            (v8 /*: any*/),
                            (v11 /*: any*/),
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
                  name: 'comments',
                  args: (v14 /*: any*/),
                  handle: 'connection',
                  key: 'IssueDetailComments_comments',
                  filters: null,
                },
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
        'query IssueDetailRootQuery(\n  $id: ID!\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      login\n      id\n    }\n    name\n    id\n  }\n  node(id: $id) {\n    __typename\n    ... on Issue {\n      title\n      number\n      author {\n        __typename\n        login\n        avatarUrl\n        ... on Node {\n          id\n        }\n      }\n      body\n      closed\n      url\n      ...IssueDetailComments_issue\n    }\n    id\n  }\n}\n\nfragment IssueDetailComments_issue on Issue {\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            id\n          }\n        }\n        body\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'eb7a581c8bab5b46c9dafa3a023cfb55';
module.exports = node;
