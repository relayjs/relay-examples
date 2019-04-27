/**
 * @flow
 * @relayHash fc7160272c7b6565a5bbd879600b2e3b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { BoldTodoRenderer_value$ref } from "./BoldTodoRenderer_value.graphql";
import type { PlainTodoRenderer_value$ref } from "./PlainTodoRenderer_value.graphql";
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
        +complete: boolean,
        +id: string,
        +content: ?{|
          +__fragmentPropName?: ?string,
          +__module_component?: ?string,
          +$fragmentRefs: PlainTodoRenderer_value$ref & BoldTodoRenderer_value$ref,
        |},
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
        complete
        id
        content(supported: ["PlainContent", "BoldContent"]) {
          __typename
          ... on PlainContent {
            ...PlainTodoRenderer_value
            __module_operation: js(module: "PlainTodoRenderer_value$normalization.graphql")
            __module_component: js(module: "PlainTodoRenderer.react")
          }
          ... on BoldContent {
            ...BoldTodoRenderer_value
            __module_operation: js(module: "BoldTodoRenderer_value$normalization.graphql")
            __module_component: js(module: "BoldTodoRenderer.react")
          }
        }
      }
    }
    user {
      id
      totalCount
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
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddBoldTodoInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "complete",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "supported",
    "value": [
      "PlainContent",
      "BoldContent"
    ],
    "type": "[String!]!"
  }
],
v7 = {
  "kind": "InlineFragment",
  "type": "PlainContent",
  "selections": [
    {
      "kind": "ModuleImport",
      "fragmentPropName": "value",
      "fragmentName": "PlainTodoRenderer_value"
    },
    {
      "kind": "ScalarField",
      "alias": "__module_component",
      "name": "js",
      "args": [
        {
          "kind": "Literal",
          "name": "module",
          "value": "PlainTodoRenderer.react",
          "type": "String"
        }
      ],
      "storageKey": "__module_component"
    }
  ]
},
v8 = {
  "kind": "InlineFragment",
  "type": "BoldContent",
  "selections": [
    {
      "kind": "ModuleImport",
      "fragmentPropName": "value",
      "fragmentName": "BoldTodoRenderer_value"
    },
    {
      "kind": "ScalarField",
      "alias": "__module_component",
      "name": "js",
      "args": [
        {
          "kind": "Literal",
          "name": "module",
          "value": "BoldTodoRenderer.react",
          "type": "String"
        }
      ],
      "storageKey": "__module_component"
    }
  ]
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddBoldTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addBoldTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Todo",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "content",
                    "storageKey": "content(BoldTodoRenderer_value:BoldTodoRenderer.react,PlainTodoRenderer_value:PlainTodoRenderer.react)",
                    "args": (v6/*: any*/),
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v9/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBoldTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addBoldTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Todo",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "content",
                    "storageKey": "content(BoldTodoRenderer_value:BoldTodoRenderer.react,PlainTodoRenderer_value:PlainTodoRenderer.react)",
                    "args": (v6/*: any*/),
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddBoldTodoMutation",
    "id": null,
    "text": "mutation AddBoldTodoMutation(\n  $input: AddBoldTodoInput!\n) {\n  addBoldTodo(input: $input) {\n    todoEdge {\n      __typename\n      cursor\n      node {\n        complete\n        id\n        content(supported: [\"PlainContent\", \"BoldContent\"]) {\n          __typename\n          ... on PlainContent {\n            ...PlainTodoRenderer_value\n            __module_operation: js(module: \"PlainTodoRenderer_value$normalization.graphql\")\n            __module_component: js(module: \"PlainTodoRenderer.react\")\n          }\n          ... on BoldContent {\n            ...BoldTodoRenderer_value\n            __module_operation: js(module: \"BoldTodoRenderer_value$normalization.graphql\")\n            __module_component: js(module: \"BoldTodoRenderer.react\")\n          }\n        }\n      }\n    }\n    user {\n      id\n      totalCount\n    }\n  }\n}\n\nfragment PlainTodoRenderer_value on PlainContent {\n  data {\n    id\n    plainText\n  }\n}\n\nfragment BoldTodoRenderer_value on BoldContent {\n  data {\n    id\n    boldText\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8eed48287466e68945c46a44265e32e';
module.exports = node;
