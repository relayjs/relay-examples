/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveCompletedTodosInput = {|
  userId: string,
  clientMutationId?: ?string,
|};
export type RemoveCompletedTodosMutationVariables = {|
  input: RemoveCompletedTodosInput
|};
export type RemoveCompletedTodosMutationResponse = {|
  +removeCompletedTodos: ?{|
    +deletedTodoIds: ?$ReadOnlyArray<string>,
    +user: {|
      +completedCount: number,
      +totalCount: number,
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
    user {
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
    "cacheID": "a49217db31a8be3f4107763b957d5fca",
    "id": null,
    "metadata": {},
    "name": "RemoveCompletedTodosMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveCompletedTodosMutation(\n  $input: RemoveCompletedTodosInput!\n) {\n  removeCompletedTodos(input: $input) {\n    deletedTodoIds\n    user {\n      completedCount\n      totalCount\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9165a0685be5ff8f0b36e5449a8bbcf9';

module.exports = node;
