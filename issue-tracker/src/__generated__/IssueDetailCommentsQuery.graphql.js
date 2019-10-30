/**
 * @flow
 * @relayHash dd3fa1f8fd5623331d1137219fb1b091
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type IssueDetailComments_issue$ref = any;
export type IssueDetailCommentsQueryVariables = {|
  cursor?: ?string,
  count?: ?number,
  id: string,
|};
export type IssueDetailCommentsQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: IssueDetailComments_issue$ref
  |}
|};
export type IssueDetailCommentsQuery = {|
  variables: IssueDetailCommentsQueryVariables,
  response: IssueDetailCommentsQueryResponse,
|};
*/

/*
query IssueDetailCommentsQuery(
  $cursor: String
  $count: Int = 10
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...IssueDetailComments_issue_1G22uz
    id
  }
}

fragment IssueDetailComments_issue_1G22uz on Issue {
  comments(after: $cursor, first: $count) {
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
        name: 'cursor',
        type: 'String',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int',
        defaultValue: 10,
      },
      {
        kind: 'LocalArgument',
        name: 'id',
        type: 'ID!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v4 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
    ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'IssueDetailCommentsQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'IssueDetailComments_issue',
              args: [
                {
                  kind: 'Variable',
                  name: 'count',
                  variableName: 'count',
                },
                {
                  kind: 'Variable',
                  name: 'cursor',
                  variableName: 'cursor',
                },
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'IssueDetailCommentsQuery',
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            (v2 /*: any*/),
            (v3 /*: any*/),
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'comments',
                  storageKey: null,
                  args: (v4 /*: any*/),
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
                            (v3 /*: any*/),
                            {
                              kind: 'LinkedField',
                              alias: null,
                              name: 'author',
                              storageKey: null,
                              args: null,
                              concreteType: null,
                              plural: false,
                              selections: [
                                (v2 /*: any*/),
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'login',
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'avatarUrl',
                                  args: null,
                                  storageKey: null,
                                },
                                (v3 /*: any*/),
                              ],
                            },
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'body',
                              args: null,
                              storageKey: null,
                            },
                            (v2 /*: any*/),
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
                  args: (v4 /*: any*/),
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
      name: 'IssueDetailCommentsQuery',
      id: null,
      text:
        'query IssueDetailCommentsQuery(\n  $cursor: String\n  $count: Int = 10\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...IssueDetailComments_issue_1G22uz\n    id\n  }\n}\n\nfragment IssueDetailComments_issue_1G22uz on Issue {\n  comments(after: $cursor, first: $count) {\n    edges {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            id\n          }\n        }\n        body\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
      metadata: {
        derivedFrom: 'IssueDetailComments_issue',
        isRefetchableQuery: true,
      },
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '674952f209c2653f27a5fad5539df511';
module.exports = node;
