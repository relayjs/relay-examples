/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime';
export type AddCommentInput = {
  readonly subjectId: string;
  readonly body: string;
  readonly clientMutationId?: string | null;
};
export type IssueActionsAddCommentMutationVariables = {
  input: AddCommentInput;
};
export type IssueActionsAddCommentMutationResponse = {
  readonly addComment: {
    readonly subject: {
      readonly id: string;
    } | null;
    readonly commentEdge: {
      readonly __id: string;
      readonly node: {
        readonly id: string;
        readonly author: {
          readonly login: string;
          readonly avatarUrl: unknown;
        } | null;
        readonly body: string;
      } | null;
    } | null;
  } | null;
};
export type IssueActionsAddCommentMutation = {
  readonly response: IssueActionsAddCommentMutationResponse;
  readonly variables: IssueActionsAddCommentMutationVariables;
};

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
            id
          }
        }
        body
      }
    }
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'AddCommentInput!',
        defaultValue: null,
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
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'login',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'avatarUrl',
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: 'ScalarField',
      alias: null,
      name: 'body',
      args: null,
      storageKey: null,
    },
    v6 = {
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
    v7 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'IssueActionsAddCommentMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'addComment',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'AddCommentPayload',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'subject',
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: [v2 /*: any*/],
            },
            {
              kind: 'LinkedField',
              alias: null,
              name: 'commentEdge',
              storageKey: null,
              args: null,
              concreteType: 'IssueCommentEdge',
              plural: false,
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
                    v2 /*: any*/,
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'author',
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: false,
                      selections: [v3 /*: any*/, v4 /*: any*/],
                    },
                    v5 /*: any*/,
                  ],
                },
                v6 /*: any*/,
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'IssueActionsAddCommentMutation',
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'addComment',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'AddCommentPayload',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'subject',
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: [v7 /*: any*/, v2 /*: any*/],
            },
            {
              kind: 'LinkedField',
              alias: null,
              name: 'commentEdge',
              storageKey: null,
              args: null,
              concreteType: 'IssueCommentEdge',
              plural: false,
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
                    v2 /*: any*/,
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'author',
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: false,
                      selections: [
                        v7 /*: any*/,
                        v3 /*: any*/,
                        v4 /*: any*/,
                        v2 /*: any*/,
                      ],
                    },
                    v5 /*: any*/,
                  ],
                },
                v6 /*: any*/,
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: 'mutation',
      name: 'IssueActionsAddCommentMutation',
      id: null,
      text:
        'mutation IssueActionsAddCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    subject {\n      __typename\n      id\n    }\n    commentEdge {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            id\n          }\n        }\n        body\n      }\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = 'f777dc7f1873d5cdab111f485ef8f404';
export default node;
