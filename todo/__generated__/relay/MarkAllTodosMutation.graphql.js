/**
 * @generated SignedSource<<59c7486edc7448c4e75045aaf7139dd1>>
 * @relayHash db9904c31d91416f21d45fe3d153884c
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID db9904c31d91416f21d45fe3d153884c

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type MarkAllTodosInput = {|
  clientMutationId?: ?string,
  complete: boolean,
  userId: string,
|};
export type MarkAllTodosMutation$variables = {|
  input: MarkAllTodosInput,
|};
export type MarkAllTodosMutation$data = {|
  +markAllTodos: ?{|
    +changedTodos: ?$ReadOnlyArray<{|
      +complete: boolean,
      +id: string,
    |}>,
    +user: {|
      +completedCount: number,
      +id: string,
    |},
  |},
|};
export type MarkAllTodosMutation = {|
  response: MarkAllTodosMutation$data,
  variables: MarkAllTodosMutation$variables,
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkAllTodosPayload",
    "kind": "LinkedField",
    "name": "markAllTodos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "changedTodos",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "complete",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completedCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarkAllTodosMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarkAllTodosMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": "db9904c31d91416f21d45fe3d153884c",
    "metadata": {},
    "name": "MarkAllTodosMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "779c582c4ba0ee3c5be19942628dfaf3";

module.exports = ((node/*: any*/)/*: Mutation<
  MarkAllTodosMutation$variables,
  MarkAllTodosMutation$data,
>*/);
