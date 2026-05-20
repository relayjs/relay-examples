/**
 * @generated SignedSource<<46a8aff551a4ee634a0f9e8483751f3a>>
 * @relayHash db9904c31d91416f21d45fe3d153884c
 * @flow
 * @lightSyntaxTransform
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
    +changedTodos: ?ReadonlyArray<{|
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
          (v1/*:: as any*/),
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
          (v1/*:: as any*/),
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
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarkAllTodosMutation",
    "selections": (v2/*:: as any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "MarkAllTodosMutation",
    "selections": (v2/*:: as any*/)
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

(node/*:: as any*/).hash = "779c582c4ba0ee3c5be19942628dfaf3";

export default ((node/*:: as any*/)/*:: as Mutation<
  MarkAllTodosMutation$variables,
  MarkAllTodosMutation$data,
>*/);
