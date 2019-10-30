/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IssueDetailComments_issue$ref: FragmentReference;
declare export opaque type IssueDetailComments_issue$fragmentType: IssueDetailComments_issue$ref;
export type IssueDetailComments_issue = {|
  +comments: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +id: string,
        +author: ?{|
          +login: string,
          +avatarUrl: any,
        |},
        +body: string,
      |},
    |}>
  |},
  +id: ?string,
  +$refType: IssueDetailComments_issue$ref,
|};
export type IssueDetailComments_issue$data = IssueDetailComments_issue;
export type IssueDetailComments_issue$key = {
  +$data?: IssueDetailComments_issue$data,
  +$fragmentRefs: IssueDetailComments_issue$ref,
};
*/

const node /*: ReaderFragment*/ = (function() {
  var v0 = ['comments'],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Fragment',
    name: 'IssueDetailComments_issue',
    type: 'Issue',
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
        operation: require('./IssueDetailCommentsQuery.graphql.js'),
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
    ],
    selections: [
      {
        kind: 'LinkedField',
        alias: 'comments',
        name: '__IssueDetailComments_comments_connection',
        storageKey: null,
        args: null,
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
                  (v1 /*: any*/),
                  {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'author',
                    storageKey: null,
                    args: null,
                    concreteType: null,
                    plural: false,
                    selections: [
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
                    ],
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'body',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: '__typename',
                    args: null,
                    storageKey: null,
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
      (v1 /*: any*/),
    ],
  };
})();
// prettier-ignore
(node/*: any*/).hash = '674952f209c2653f27a5fad5539df511';
module.exports = node;
