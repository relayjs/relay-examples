/**
 * @flow
 * @relayHash 7a15bce497f44be4b8225c4bff90aef9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Todo_todo$ref } from "./Todo_todo.graphql";
export type AddPlainTodoInput = {|
  text: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type AddPlainTodoMutationVariables = {|
  input: AddPlainTodoInput
|};
export type AddPlainTodoMutationResponse = {|
  +addPlainTodo: ?{|
    +todoEdge: {|
      +__typename: string,
      +cursor: string,
      +node: ?{|
        +__typename: string,
        +id: string,
        +complete: boolean,
        +__fragmentPropName?: ?string,
        +__module_component?: ?string,
        +$fragmentRefs: Todo_todo$ref,
      |},
    |},
    +user: {|
      +id: string,
      +totalCount: number,
    |},
  |}
|};
export type AddPlainTodoMutation = {|
  variables: AddPlainTodoMutationVariables,
  response: AddPlainTodoMutationResponse,
|};
*/


/*
mutation AddPlainTodoMutation(
  $input: AddPlainTodoInput!
) {
  addPlainTodo(input: $input) {
    todoEdge {
      __typename
      cursor
      node {
        __typename
        id
        complete
        ...Todo_todo
        __module_operation_AddPlainTodoMutation: js(module: "Todo_todo$normalization.graphql")
        __module_component_AddPlainTodoMutation: js(module: "Todo")
      }
    }
    user {
      id
      totalCount
    }
  }
}

fragment Todo_todo on Todo {
  complete
  id
  content(supported: ["PlainContent", "BoldContent"]) {
    __typename
    ... on PlainContent {
      ...PlainTodoRenderer_value
      __module_operation_Todo_todo: js(module: "PlainTodoRenderer_value$normalization.graphql")
      __module_component_Todo_todo: js(module: "PlainTodoRenderer")
    }
    ... on BoldContent {
      ...BoldTodoRenderer_value
      __module_operation_Todo_todo: js(module: "BoldTodoRenderer_value$normalization.graphql")
      __module_component_Todo_todo: js(module: "BoldTodoRenderer")
    }
  }
}

fragment PlainTodoRenderer_value on PlainContent {
  data {
    id
    plainText
  }
}

fragment BoldTodoRenderer_value on BoldContent {
  data {
    id
    boldText
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddPlainTodoInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addPlainTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddPlainTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todoEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "TodoEdge",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Todo",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "complete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ModuleImport",
                "documentName": "AddPlainTodoMutation",
                "fragmentName": "Todo_todo",
                "fragmentPropName": "todo"
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddPlainTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddPlainTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddPlainTodoMutation",
    "id": null,
    "text": "mutation AddPlainTodoMutation(\n  $input: AddPlainTodoInput!\n) {\n  addPlainTodo(input: $input) {\n    todoEdge {\n      __typename\n      cursor\n      node {\n        __typename\n        id\n        complete\n        ...Todo_todo\n        __module_operation_AddPlainTodoMutation: js(module: \"Todo_todo$normalization.graphql\")\n        __module_component_AddPlainTodoMutation: js(module: \"Todo\")\n      }\n    }\n    user {\n      id\n      totalCount\n    }\n  }\n}\n\nfragment Todo_todo on Todo {\n  complete\n  id\n  content(supported: [\"PlainContent\", \"BoldContent\"]) {\n    __typename\n    ... on PlainContent {\n      ...PlainTodoRenderer_value\n      __module_operation_Todo_todo: js(module: \"PlainTodoRenderer_value$normalization.graphql\")\n      __module_component_Todo_todo: js(module: \"PlainTodoRenderer\")\n    }\n    ... on BoldContent {\n      ...BoldTodoRenderer_value\n      __module_operation_Todo_todo: js(module: \"BoldTodoRenderer_value$normalization.graphql\")\n      __module_component_Todo_todo: js(module: \"BoldTodoRenderer\")\n    }\n  }\n}\n\nfragment PlainTodoRenderer_value on PlainContent {\n  data {\n    id\n    plainText\n  }\n}\n\nfragment BoldTodoRenderer_value on BoldContent {\n  data {\n    id\n    boldText\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b207716393be12d90d8713e77d4047e';
module.exports = node;
