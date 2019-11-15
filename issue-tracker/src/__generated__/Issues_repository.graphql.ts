/* tslint:disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type Issues_repository = {
  readonly issues: {
    readonly edges: ReadonlyArray<{
      readonly __id: string;
      readonly node: {
        readonly ' $fragmentRefs': FragmentRefs<'IssuesListItem_issue'>;
      } | null;
    } | null> | null;
  };
  readonly id: string | null;
  readonly ' $refType': 'Issues_repository';
};
export type Issues_repository$data = Issues_repository;
export type Issues_repository$key = {
  readonly ' $data'?: Issues_repository$data;
  readonly ' $fragmentRefs': FragmentRefs<'Issues_repository'>;
};

const node: ReaderFragment = (function() {
  var v0 = ['issues'];
  return {
    kind: 'Fragment',
    name: 'Issues_repository',
    type: 'Repository',
    metadata: {
      connection: [
        {
          count: 'count',
          cursor: 'cursor',
          direction: 'forward',
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: 'count',
            cursor: 'cursor',
          },
          backward: null,
          path: v0 /*: any*/,
        },
        operation: require('./IssuesPaginationQuery.graphql.ts'),
        fragmentPathInResult: ['node'],
      },
    },
    argumentDefinitions: [
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
    ],
    selections: [
      {
        kind: 'LinkedField',
        alias: 'issues',
        name: '__Issues_issues_connection',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'states',
            variableName: 'states',
          },
        ],
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
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: '__typename',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'FragmentSpread',
                    name: 'IssuesListItem_issue',
                    args: null,
                  },
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
        kind: 'ScalarField',
        alias: null,
        name: 'id',
        args: null,
        storageKey: null,
      },
    ],
  };
})();
(node as any).hash = '5040d7f86ce7f263d3a1bf6e624a6953';
export default node;
