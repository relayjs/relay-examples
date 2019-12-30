/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type IssuesListItem_issue$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Issues_repository$ref: FragmentReference;
declare export opaque type Issues_repository$fragmentType: Issues_repository$ref;
export type Issues_repository = {|
  +issues: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +$fragmentRefs: IssuesListItem_issue$ref
      |},
    |}>
  |},
  +id: ?string,
  +$refType: Issues_repository$ref,
|};
export type Issues_repository$data = Issues_repository;
export type Issues_repository$key = {
  +$data?: Issues_repository$data,
  +$fragmentRefs: Issues_repository$ref,
  ...
};
*/

const node /*: ReaderFragment*/ = (function() {
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
          path: (v0 /*: any*/),
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: 'count',
            cursor: 'cursor',
          },
          backward: null,
          path: (v0 /*: any*/),
        },
        operation: require('./IssuesPaginationQuery.graphql.js'),
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
// prettier-ignore
(node/*: any*/).hash = '5040d7f86ce7f263d3a1bf6e624a6953';
module.exports = node;
