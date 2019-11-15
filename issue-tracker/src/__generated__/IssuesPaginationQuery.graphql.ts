/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type IssueState = 'CLOSED' | 'OPEN' | '%future added value';
export type IssuesPaginationQueryVariables = {
  cursor?: string | null;
  count?: number | null;
  states?: ReadonlyArray<IssueState> | null;
  id: string;
};
export type IssuesPaginationQueryResponse = {
  readonly node: {
    readonly ' $fragmentRefs': FragmentRefs<'Issues_repository'>;
  } | null;
};
export type IssuesPaginationQuery = {
  readonly response: IssuesPaginationQueryResponse;
  readonly variables: IssuesPaginationQueryVariables;
};

/*
query IssuesPaginationQuery(
  $cursor: String
  $count: Int = 10
  $states: [IssueState!] = [OPEN]
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Issues_repository_a4QoT
    id
  }
}

fragment IssuesListItem_issue on Issue {
  id
  title
}

fragment Issues_repository_a4QoT on Repository {
  issues(after: $cursor, first: $count, states: $states) {
    edges {
      node {
        ...IssuesListItem_issue
        id
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

const node: ConcreteRequest = (function() {
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
        name: 'states',
        type: '[IssueState!]',
        defaultValue: ['OPEN'],
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
      kind: 'Variable',
      name: 'states',
      variableName: 'states',
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v5 = [
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
      v2 /*: any*/,
    ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'IssuesPaginationQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'Issues_repository',
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
                v2 /*: any*/,
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'IssuesPaginationQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'node',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: null,
          plural: false,
          selections: [
            v3 /*: any*/,
            v4 /*: any*/,
            {
              kind: 'InlineFragment',
              type: 'Repository',
              selections: [
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'issues',
                  storageKey: null,
                  args: v5 /*: any*/,
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
                            v4 /*: any*/,
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'title',
                              args: null,
                              storageKey: null,
                            },
                            v3 /*: any*/,
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
                  args: v5 /*: any*/,
                  handle: 'connection',
                  key: 'Issues_issues',
                  filters: ['states'],
                },
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: 'query',
      name: 'IssuesPaginationQuery',
      id: null,
      text:
        'query IssuesPaginationQuery(\n  $cursor: String\n  $count: Int = 10\n  $states: [IssueState!] = [OPEN]\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Issues_repository_a4QoT\n    id\n  }\n}\n\nfragment IssuesListItem_issue on Issue {\n  id\n  title\n}\n\nfragment Issues_repository_a4QoT on Repository {\n  issues(after: $cursor, first: $count, states: $states) {\n    edges {\n      node {\n        ...IssuesListItem_issue\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
      metadata: {
        derivedFrom: 'Issues_repository',
        isRefetchableQuery: true,
      },
    },
  };
})();
(node as any).hash = '5040d7f86ce7f263d3a1bf6e624a6953';
export default node;
