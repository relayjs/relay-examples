/**
 * @flow
 * @relayHash 249d97bae8f48cb29dc8d9998af618df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type IssueActions_issue$ref = any;
type IssueDetailComments_issue$ref = any;
type IssueDetailRoot_timelineItems$ref = any;
export type IssueDetailRootQueryVariables = {|
  id: string
|};
export type IssueDetailRootQueryResponse = {|
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
    +timelineItems?: {|
      +nodes: ?$ReadOnlyArray<?{|
        +__typename: string,
        +$fragmentRefs: IssueDetailRoot_timelineItems$ref,
      |}>
    |},
    +$fragmentRefs: IssueDetailComments_issue$ref & IssueActions_issue$ref,
  |}
|};
export type IssueDetailRootQuery = {|
  variables: IssueDetailRootQueryVariables,
  response: IssueDetailRootQueryResponse,
|};
*/

/*
query IssueDetailRootQuery(
  $id: ID!
) {
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
      ...IssueActions_issue
      timelineItems(first: 10) {
        nodes {
          __typename
          ...IssueDetailRoot_timelineItems
          ... on Node {
            id
          }
        }
      }
    }
    id
  }
}

fragment IssueActions_issue on Issue {
  id
  closed
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

fragment IssueDetailRoot_timelineItems on IssueTimelineItems {
  __typename
  ... on IssueComment {
    body
  }
  ... on CrossReferencedEvent {
    willCloseTarget
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
      name: 'title',
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'number',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'login',
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: 'ScalarField',
      alias: null,
      name: 'avatarUrl',
      args: null,
      storageKey: null,
    },
    v6 = {
      kind: 'ScalarField',
      alias: null,
      name: 'body',
      args: null,
      storageKey: null,
    },
    v7 = {
      kind: 'ScalarField',
      alias: null,
      name: 'closed',
      args: null,
      storageKey: null,
    },
    v8 = {
      kind: 'ScalarField',
      alias: null,
      name: 'url',
      args: null,
      storageKey: null,
    },
    v9 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
      },
    ],
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
    v12 = {
      kind: 'LinkedField',
      alias: null,
      name: 'author',
      storageKey: null,
      args: null,
      concreteType: null,
      plural: false,
      selections: [
        (v10 /*: any*/),
        (v4 /*: any*/),
        (v5 /*: any*/),
        (v11 /*: any*/),
      ],
    };
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
          name: 'node',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                (v2 /*: any*/),
                (v3 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'author',
                  storageKey: null,
                  args: null,
                  concreteType: null,
                  plural: false,
                  selections: [(v4 /*: any*/), (v5 /*: any*/)],
                },
                (v6 /*: any*/),
                (v7 /*: any*/),
                (v8 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'timelineItems',
                  storageKey: 'timelineItems(first:10)',
                  args: (v9 /*: any*/),
                  concreteType: 'IssueTimelineItemsConnection',
                  plural: false,
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'nodes',
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: true,
                      selections: [
                        (v10 /*: any*/),
                        {
                          kind: 'FragmentSpread',
                          name: 'IssueDetailRoot_timelineItems',
                          args: null,
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: 'FragmentSpread',
                  name: 'IssueDetailComments_issue',
                  args: null,
                },
                {
                  kind: 'FragmentSpread',
                  name: 'IssueActions_issue',
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
          name: 'node',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: null,
          plural: false,
          selections: [
            (v10 /*: any*/),
            (v11 /*: any*/),
            {
              kind: 'InlineFragment',
              type: 'Issue',
              selections: [
                (v2 /*: any*/),
                (v3 /*: any*/),
                (v12 /*: any*/),
                (v6 /*: any*/),
                (v7 /*: any*/),
                (v8 /*: any*/),
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'comments',
                  storageKey: 'comments(first:10)',
                  args: (v9 /*: any*/),
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
                            (v11 /*: any*/),
                            (v12 /*: any*/),
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
                  name: 'comments',
                  args: (v9 /*: any*/),
                  handle: 'connection',
                  key: 'IssueDetailComments_comments',
                  filters: null,
                },
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'timelineItems',
                  storageKey: 'timelineItems(first:10)',
                  args: (v9 /*: any*/),
                  concreteType: 'IssueTimelineItemsConnection',
                  plural: false,
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'nodes',
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: true,
                      selections: [
                        (v10 /*: any*/),
                        (v11 /*: any*/),
                        {
                          kind: 'InlineFragment',
                          type: 'IssueComment',
                          selections: [(v6 /*: any*/)],
                        },
                        {
                          kind: 'InlineFragment',
                          type: 'CrossReferencedEvent',
                          selections: [
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'willCloseTarget',
                              args: null,
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
        'query IssueDetailRootQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Issue {\n      title\n      number\n      author {\n        __typename\n        login\n        avatarUrl\n        ... on Node {\n          id\n        }\n      }\n      body\n      closed\n      url\n      ...IssueDetailComments_issue\n      ...IssueActions_issue\n      timelineItems(first: 10) {\n        nodes {\n          __typename\n          ...IssueDetailRoot_timelineItems\n          ... on Node {\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment IssueActions_issue on Issue {\n  id\n  closed\n}\n\nfragment IssueDetailComments_issue on Issue {\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            id\n          }\n        }\n        body\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment IssueDetailRoot_timelineItems on IssueTimelineItems {\n  __typename\n  ... on IssueComment {\n    body\n  }\n  ... on CrossReferencedEvent {\n    willCloseTarget\n  }\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '097af6f02b71169f37b75d179900d639';

module.exports = node;
