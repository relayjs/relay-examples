/**
 * @generated SignedSource<<65dd292af5e1fc94a3da5241fab89827>>
 * @relayHash ac90c59b3a07237ee6f3cf60f9879f90
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 97566a98b66252cd5ca8bd9e58a20d2b33de1b47

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddTodoInput = {|
  text: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type AddTodoMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: AddTodoInput,
|};
export type AddTodoMutation$data = {|
  +addTodo: ?{|
    +todoEdge: {|
      +node: ?{|
        +complete: boolean,
        +id: string,
        +text: string,
      |},
    |},
    +user: {|
      +id: string,
      +totalCount: number,
    |},
  |},
|};
export type AddTodoMutation = {|
  variables: AddTodoMutation$variables,
  response: AddTodoMutation$data,
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "TodoEdge",
  "kind": "LinkedField",
  "name": "todoEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "complete",
          "storageKey": null
        },
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "AddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "todoEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "97566a98b66252cd5ca8bd9e58a20d2b33de1b47",
    "metadata": {},
    "name": "AddTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "4ae75ce7e6724d608803b8cdd76c087f";

module.exports = ((node/*: any*/)/*: Mutation<
  AddTodoMutation$variables,
  AddTodoMutation$data,
>*/);
