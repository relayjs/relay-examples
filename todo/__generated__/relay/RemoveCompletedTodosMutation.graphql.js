/**
 * @generated SignedSource<<16660bd7a0153106b307d26a979294e2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveCompletedTodosInput = {|
  userId: string,
  clientMutationId?: ?string,
|};
export type RemoveCompletedTodosMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: RemoveCompletedTodosInput,
|};
export type RemoveCompletedTodosMutation$data = {|
  +removeCompletedTodos: ?{|
    +deletedTodoIds: ?$ReadOnlyArray<string>,
    +user: {|
      +id: string,
      +completedCount: number,
      +totalCount: number,
    |},
  |},
|};
export type RemoveCompletedTodosMutation = {|
  variables: RemoveCompletedTodosMutation$variables,
  response: RemoveCompletedTodosMutation$data,
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
  "name": "deletedTodoIds",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    },
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
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "kind": "LinkedField",
        "name": "removeCompletedTodos",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "kind": "LinkedField",
        "name": "removeCompletedTodos",
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
            "name": "deletedTodoIds",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4d3a6acb198829c5ed5f748574934211",
    "id": null,
    "metadata": {},
    "name": "RemoveCompletedTodosMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveCompletedTodosMutation(\n  $input: RemoveCompletedTodosInput!\n) {\n  removeCompletedTodos(input: $input) {\n    deletedTodoIds\n    user {\n      id\n      completedCount\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "b78c908fef03b8b5d3ca2bddb5d81d89";

module.exports = ((node/*: any*/)/*: Mutation<
  RemoveCompletedTodosMutation$variables,
  RemoveCompletedTodosMutation$data,
>*/);
