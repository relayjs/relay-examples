/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddCommentInput = {|
  subjectId: string,
  body: string,
  clientMutationId?: ?string,
|};
export type IssueActionsAddCommentMutationVariables = {|
  input: AddCommentInput
|};
export type IssueActionsAddCommentMutationResponse = {|
  +addComment: ?{|
    +subject: ?{|
      +id: string
    |},
    +commentEdge: ?{|
      +__id: string,
      +node: ?{|
        +id: string,
        +author: ?{|
          +login: string,
          +avatarUrl: any,
        |},
        +body: string,
      |},
    |},
  |}
|};
export type IssueActionsAddCommentMutation = {|
  variables: IssueActionsAddCommentMutationVariables,
  response: IssueActionsAddCommentMutationResponse,
|};
*/

/*
mutation IssueActionsAddCommentMutation(
  $input: AddCommentInput!
) {
  addComment(input: $input) {
    subject {
      __typename
      id
    }
    commentEdge {
      node {
        id
        author {
          __typename
          login
          avatarUrl
          ... on Node {
            __isNode: __typename
            id
          }
        }
        body
      }
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'input',
        variableName: 'input',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = [(v2 /*: any*/)],
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'login',
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'avatarUrl',
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'body',
      storageKey: null,
    },
    v7 = {
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
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: (v0 /*: any*/),
      kind: 'Fragment',
      metadata: null,
      name: 'IssueActionsAddCommentMutation',
      selections: [
        {
          alias: null,
          args: (v1 /*: any*/),
          concreteType: 'AddCommentPayload',
          kind: 'LinkedField',
          name: 'addComment',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'subject',
              plural: false,
              selections: (v3 /*: any*/),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'IssueCommentEdge',
              kind: 'LinkedField',
              name: 'commentEdge',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'IssueComment',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    (v2 /*: any*/),
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'author',
                      plural: false,
                      selections: [(v4 /*: any*/), (v5 /*: any*/)],
                      storageKey: null,
                    },
                    (v6 /*: any*/),
                  ],
                  storageKey: null,
                },
                (v7 /*: any*/),
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: 'Operation',
      name: 'IssueActionsAddCommentMutation',
      selections: [
        {
          alias: null,
          args: (v1 /*: any*/),
          concreteType: 'AddCommentPayload',
          kind: 'LinkedField',
          name: 'addComment',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'subject',
              plural: false,
              selections: [(v8 /*: any*/), (v2 /*: any*/)],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'IssueCommentEdge',
              kind: 'LinkedField',
              name: 'commentEdge',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'IssueComment',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    (v2 /*: any*/),
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: 'LinkedField',
                      name: 'author',
                      plural: false,
                      selections: [
                        (v8 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        {
                          kind: 'InlineFragment',
                          selections: (v3 /*: any*/),
                          type: 'Node',
                          abstractKey: '__isNode',
                        },
                      ],
                      storageKey: null,
                    },
                    (v6 /*: any*/),
                  ],
                  storageKey: null,
                },
                (v7 /*: any*/),
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '19434bd8bebd271b879ea580f6c6ecaf',
      id: null,
      metadata: {},
      name: 'IssueActionsAddCommentMutation',
      operationKind: 'mutation',
      text:
        'mutation IssueActionsAddCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    subject {\n      __typename\n      id\n    }\n    commentEdge {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        body\n      }\n    }\n  }\n}\n',
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'f777dc7f1873d5cdab111f485ef8f404';

module.exports = node;
