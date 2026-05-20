/**
 * @generated SignedSource<<52d616996d744da436ba4466a89434b3>>
 * @relayHash 4d3a6acb198829c5ed5f748574934211
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

// @relayRequestID 4d3a6acb198829c5ed5f748574934211

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveCompletedTodosInput = {|
  clientMutationId?: ?string,
  userId: string,
|};
export type RemoveCompletedTodosMutation$variables = {|
  connections: ReadonlyArray<string>,
  input: RemoveCompletedTodosInput,
|};
export type RemoveCompletedTodosMutation$data = {|
  +removeCompletedTodos: ?{|
    +deletedTodoIds: ?ReadonlyArray<string>,
    +user: {|
      +completedCount: number,
      +id: string,
      +totalCount: number,
    |},
  |},
|};
export type RemoveCompletedTodosMutation = {|
  response: RemoveCompletedTodosMutation$data,
  variables: RemoveCompletedTodosMutation$variables,
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
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "kind": "LinkedField",
        "name": "removeCompletedTodos",
        "plural": false,
        "selections": [
          (v2/*:: as any*/),
          (v3/*:: as any*/)
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
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "kind": "LinkedField",
        "name": "removeCompletedTodos",
        "plural": false,
        "selections": [
          (v2/*:: as any*/),
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
          (v3/*:: as any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "4d3a6acb198829c5ed5f748574934211",
    "metadata": {},
    "name": "RemoveCompletedTodosMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*:: as any*/).hash = "b78c908fef03b8b5d3ca2bddb5d81d89";

export default ((node/*:: as any*/)/*:: as Mutation<
  RemoveCompletedTodosMutation$variables,
  RemoveCompletedTodosMutation$data,
>*/);
