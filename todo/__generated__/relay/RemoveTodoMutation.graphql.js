/**
 * @generated SignedSource<<2ad0c55b0c794ad0bca56215de1a57bd>>
 * @relayHash aba626ea9bdf465954e89e5590eb2c1a
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 26f2d1c83c87de7401777aac3818053a93bb6bb7

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveTodoInput = {|
  id: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type RemoveTodoMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: RemoveTodoInput,
|};
export type RemoveTodoMutation$data = {|
  +removeTodo: ?{|
    +deletedTodoId: string,
    +user: {|
      +completedCount: number,
      +totalCount: number,
    |},
  |},
|};
export type RemoveTodoMutation = {|
  variables: RemoveTodoMutation$variables,
  response: RemoveTodoMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
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
  "name": "deletedTodoId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completedCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTodoId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "26f2d1c83c87de7401777aac3818053a93bb6bb7",
    "metadata": {},
    "name": "RemoveTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "f1e78c738dc1aa9c26df49783daee003";

module.exports = ((node/*: any*/)/*: Mutation<
  RemoveTodoMutation$variables,
  RemoveTodoMutation$data,
>*/);
