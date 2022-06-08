/**
 * @generated SignedSource<<3fc3dd953e92ee200ac67b56158bd07a>>
 * @relayHash d7dda774dcfa32fe0d9661e01cac9a4a
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID d7dda774dcfa32fe0d9661e01cac9a4a

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangeTodoStatusInput = {|
  clientMutationId?: ?string,
  complete: boolean,
  id: string,
  userId: string,
|};
export type ChangeTodoStatusMutation$variables = {|
  input: ChangeTodoStatusInput,
|};
export type ChangeTodoStatusMutation$data = {|
  +changeTodoStatus: ?{|
    +todo: {|
      +complete: boolean,
      +id: string,
    |},
    +user: {|
      +completedCount: number,
      +id: string,
    |},
  |},
|};
export type ChangeTodoStatusMutation = {|
  response: ChangeTodoStatusMutation$data,
  variables: ChangeTodoStatusMutation$variables,
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
    "concreteType": "ChangeTodoStatusPayload",
    "kind": "LinkedField",
    "name": "changeTodoStatus",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
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
    "name": "ChangeTodoStatusMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangeTodoStatusMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": "d7dda774dcfa32fe0d9661e01cac9a4a",
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "e232227a4f30f0e16f4e1e1a2e0cea75";

module.exports = ((node/*: any*/)/*: Mutation<
  ChangeTodoStatusMutation$variables,
  ChangeTodoStatusMutation$data,
>*/);
