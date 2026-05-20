/**
 * @generated SignedSource<<c6324cfc052517896637123d19dcda6a>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddCommentInput = {|
  body: string,
  clientMutationId?: ?string,
  subjectId: string,
|};
export type IssueActionsAddCommentMutation$variables = {|
  input: AddCommentInput,
|};
export type IssueActionsAddCommentMutation$data = {|
  +addComment: ?{|
    +commentEdge: ?{|
      +__id: string,
      +node: ?{|
        +author: ?{|
          +avatarUrl: any,
          +login: string,
        |},
        +body: string,
        +id: string,
      |},
    |},
    +subject: ?{|
      +id: string,
    |},
  |},
|};
export type IssueActionsAddCommentMutation = {|
  response: IssueActionsAddCommentMutation$data,
  variables: IssueActionsAddCommentMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*:: as any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v7 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueActionsAddCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "AddCommentPayload",
        "kind": "LinkedField",
        "name": "addComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "subject",
            "plural": false,
            "selections": (v3/*:: as any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IssueCommentEdge",
            "kind": "LinkedField",
            "name": "commentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IssueComment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*:: as any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v4/*:: as any*/),
                      (v5/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*:: as any*/)
                ],
                "storageKey": null
              },
              (v7/*:: as any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "IssueActionsAddCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "AddCommentPayload",
        "kind": "LinkedField",
        "name": "addComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "subject",
            "plural": false,
            "selections": [
              (v8/*:: as any*/),
              (v2/*:: as any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IssueCommentEdge",
            "kind": "LinkedField",
            "name": "commentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IssueComment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*:: as any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v8/*:: as any*/),
                      (v4/*:: as any*/),
                      (v5/*:: as any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v3/*:: as any*/),
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v6/*:: as any*/)
                ],
                "storageKey": null
              },
              (v7/*:: as any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "19434bd8bebd271b879ea580f6c6ecaf",
    "id": null,
    "metadata": {},
    "name": "IssueActionsAddCommentMutation",
    "operationKind": "mutation",
    "text": "mutation IssueActionsAddCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    subject {\n      __typename\n      id\n    }\n    commentEdge {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        body\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*:: as any*/).hash = "f777dc7f1873d5cdab111f485ef8f404";

export default ((node/*:: as any*/)/*:: as Mutation<
  IssueActionsAddCommentMutation$variables,
  IssueActionsAddCommentMutation$data,
>*/);
