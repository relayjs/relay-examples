/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoStatusInput = {|
  complete: boolean,
  id: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type ChangeTodoStatusMutationVariables = {|
  input: ChangeTodoStatusInput
|};
export type ChangeTodoStatusMutationResponse = {|
  +changeTodoStatus: ?{|
    +todo: {|
      +id: string,
      +complete: boolean,
    |},
    +user: {|
      +id: string,
      +completedCount: number,
    |},
  |}
|};
export type ChangeTodoStatusMutation = {|
  variables: ChangeTodoStatusMutationVariables,
  response: ChangeTodoStatusMutationResponse,
|};
*/


/*
mutation ChangeTodoStatusMutation(
  $input: ChangeTodoStatusInput!
) {
  changeTodoStatus(input: $input) {
    todo {
      id
      complete
    }
    user {
      id
      completedCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
    "cacheID": "d7dda774dcfa32fe0d9661e01cac9a4a",
    "id": null,
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": "mutation ChangeTodoStatusMutation(\n  $input: ChangeTodoStatusInput!\n) {\n  changeTodoStatus(input: $input) {\n    todo {\n      id\n      complete\n    }\n    user {\n      id\n      completedCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e232227a4f30f0e16f4e1e1a2e0cea75';

module.exports = node;
