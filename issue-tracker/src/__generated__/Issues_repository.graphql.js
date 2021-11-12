/**
 * @generated SignedSource<<2841c539008c4e64eae9ee3581fee3f2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type IssuesListItem_issue$ref = any;
import type { FragmentReference } from "relay-runtime";
type Issues_repository$ref = any;
type Issues_repository$fragmentType = any;
export type { Issues_repository$ref, Issues_repository$fragmentType };
export type Issues_repository = {|
  +issues: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +$fragmentRefs: IssuesListItem_issue$ref,
      |},
    |}>,
  |},
  +id: string,
  +$refType: Issues_repository$ref,
|};
export type Issues_repository$data = Issues_repository;
export type Issues_repository$key = {
  +$data?: Issues_repository$data,
  +$fragmentRefs: Issues_repository$ref,
  ...
};
*/

var node /*: ReaderFragment*/ = (function() {
  var v0 = ['issues'];
  return {
    argumentDefinitions: [
      {
        defaultValue: 10,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
      {
        defaultValue: 'OPEN',
        kind: 'LocalArgument',
        name: 'states',
      },
    ],
    kind: 'Fragment',
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
        fragmentPathInResult: ['node'],
        operation: require('./IssuesPaginationQuery.graphql'),
        identifierField: 'id',
      },
    },
    name: 'Issues_repository',
    selections: [
      {
        alias: 'issues',
        args: [
          {
            kind: 'Variable',
            name: 'states',
            variableName: 'states',
          },
        ],
        concreteType: 'IssueConnection',
        kind: 'LinkedField',
        name: '__Issues_issues_connection',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'IssueEdge',
            kind: 'LinkedField',
            name: 'edges',
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'Issue',
                kind: 'LinkedField',
                name: 'node',
                plural: false,
                selections: [
                  {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'IssuesListItem_issue',
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: '__typename',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'cursor',
                storageKey: null,
              },
              {
                kind: 'ClientExtension',
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: '__id',
                    storageKey: null,
                  },
                ],
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'PageInfo',
            kind: 'LinkedField',
            name: 'pageInfo',
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'endCursor',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'hasNextPage',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
      {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'id',
        storageKey: null,
      },
    ],
    type: 'Repository',
    abstractKey: null,
  };
})();

(node /*: any*/).hash = '5247d00636acb2216057e2b051be4a3c';

module.exports = node;
