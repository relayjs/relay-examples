/**
 * @flow
 * @relayHash 273367c0c6d7828428975bb0b5b6d0b1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveCompletedTodosInput = {|
  clientMutationId?: ?string
|};
export type RemoveCompletedTodosMutationVariables = {|
  input: RemoveCompletedTodosInput
|};
export type RemoveCompletedTodosMutationResponse = {|
  +removeCompletedTodos: ?{|
    +deletedTodoIds: ?$ReadOnlyArray<?string>,
    +viewer: ?{|
      +completedCount: ?number,
      +totalCount: ?number,
    |},
  |}
|};
export type RemoveCompletedTodosMutation = {|
  variables: RemoveCompletedTodosMutationVariables,
  response: RemoveCompletedTodosMutationResponse,
|};
*/


/*
mutation RemoveCompletedTodosMutation(
  $input: RemoveCompletedTodosInput!
) {
  removeCompletedTodos(input: $input) {
    deletedTodoIds
    viewer {
      completedCount
      totalCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveCompletedTodosInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveCompletedTodosInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedTodoIds",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "completedCount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveCompletedTodosMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeCompletedTodos",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveCompletedTodosMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeCompletedTodos",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveCompletedTodosMutation",
    "id": null,
    "text": "mutation RemoveCompletedTodosMutation(\n  $input: RemoveCompletedTodosInput!\n) {\n  removeCompletedTodos(input: $input) {\n    deletedTodoIds\n    viewer {\n      completedCount\n      totalCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '303799d791e6e233861ee011ff3bdbb8';
module.exports = node;
