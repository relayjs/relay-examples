/**
 * @flow
 * @relayHash 7f91f6f739592cc7e716533b5d4678e2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Todo_todo$ref } from "./Todo_todo.graphql";
export type AddBoldTodoInput = {|
  text: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type AddBoldTodoMutationVariables = {|
  input: AddBoldTodoInput
|};
export type AddBoldTodoMutationResponse = {|
  +addBoldTodo: ?{|
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
export type AddBoldTodoMutation = {|
  variables: AddBoldTodoMutationVariables,
  response: AddBoldTodoMutationResponse,
|};
*/


/*
mutation AddBoldTodoMutation(
  $input: AddBoldTodoInput!
) {
  addBoldTodo(input: $input) {
    todoEdge {
      __typename
      cursor
      node {
        __typename
        id
        complete
        ...Todo_todo
        __module_operation_AddBoldTodoMutation: js(module: "Todo_todo$normalization.graphql")
        __module_component_AddBoldTodoMutation: js(module: "Todo")
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
    "type": "AddBoldTodoInput!",
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
    "name": "addBoldTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddBoldTodoPayload",
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
                "documentName": "AddBoldTodoMutation",
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
    "name": "AddBoldTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBoldTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddBoldTodoMutation",
    "id": null,
    "text": "mutation AddBoldTodoMutation(\n  $input: AddBoldTodoInput!\n) {\n  addBoldTodo(input: $input) {\n    todoEdge {\n      __typename\n      cursor\n      node {\n        __typename\n        id\n        complete\n        ...Todo_todo\n        __module_operation_AddBoldTodoMutation: js(module: \"Todo_todo$normalization.graphql\")\n        __module_component_AddBoldTodoMutation: js(module: \"Todo\")\n      }\n    }\n    user {\n      id\n      totalCount\n    }\n  }\n}\n\nfragment Todo_todo on Todo {\n  complete\n  id\n  content(supported: [\"PlainContent\", \"BoldContent\"]) {\n    __typename\n    ... on PlainContent {\n      ...PlainTodoRenderer_value\n      __module_operation_Todo_todo: js(module: \"PlainTodoRenderer_value$normalization.graphql\")\n      __module_component_Todo_todo: js(module: \"PlainTodoRenderer\")\n    }\n    ... on BoldContent {\n      ...BoldTodoRenderer_value\n      __module_operation_Todo_todo: js(module: \"BoldTodoRenderer_value$normalization.graphql\")\n      __module_component_Todo_todo: js(module: \"BoldTodoRenderer\")\n    }\n  }\n}\n\nfragment PlainTodoRenderer_value on PlainContent {\n  data {\n    id\n    plainText\n  }\n}\n\nfragment BoldTodoRenderer_value on BoldContent {\n  data {\n    id\n    boldText\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '53727c1e46b773876b6f6c6ae5ea30d5';
module.exports = node;
