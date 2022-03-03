/**
 * @generated SignedSource<<88b4f349f4ce50880482bf1822232f48>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type MarkAllTodosInput = {|
  complete: boolean,
  userId: string,
  clientMutationId?: ?string,
|};
export type MarkAllTodosMutation$variables = {|
  input: MarkAllTodosInput,
|};
export type MarkAllTodosMutation$data = {|
  +markAllTodos: ?{|
    +changedTodos: ?$ReadOnlyArray<{|
      +id: string,
      +complete: boolean,
    |}>,
    +user: {|
      +id: string,
      +completedCount: number,
    |},
  |},
|};
export type MarkAllTodosMutation = {|
  variables: MarkAllTodosMutation$variables,
  response: MarkAllTodosMutation$data,
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
    "cacheID": "db9904c31d91416f21d45fe3d153884c",
    "id": null,
    "metadata": {},
    "name": "MarkAllTodosMutation",
    "operationKind": "mutation",
    "text": "mutation MarkAllTodosMutation(\n  $input: MarkAllTodosInput!\n) {\n  markAllTodos(input: $input) {\n    changedTodos {\n      id\n      complete\n    }\n    user {\n      id\n      completedCount\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "779c582c4ba0ee3c5be19942628dfaf3";

module.exports = ((node/*: any*/)/*: Mutation<
  MarkAllTodosMutation$variables,
  MarkAllTodosMutation$data,
>*/);
