/**
 * @generated SignedSource<<f9df718fec477473fce2ba2dce509cd8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { TodoList_user$fragmentType } from "./TodoList_user.graphql";
export type TodoAppQuery$variables = {|
  userId?: ?string,
|};
export type TodoAppQueryVariables = TodoAppQuery$variables;
export type TodoAppQuery$data = {|
  +user: {|
    +$fragmentSpreads: TodoList_user$fragmentType,
  |},
|};
export type TodoAppQueryResponse = TodoAppQuery$data;
export type TodoAppQuery = {|
  variables: TodoAppQueryVariables,
  response: TodoAppQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoAppQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "TodoList_user"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "user"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "TodoConnection",
            "kind": "LinkedField",
            "name": "todos",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TodoEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "complete",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "text",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "todos(first:2147483647)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "TodoList_todos",
            "kind": "LinkedHandle",
            "name": "todos"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
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
            "name": "userId",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8a75762b2e92a08aeb1007fc11f71298",
    "id": null,
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": "query TodoAppQuery(\n  $userId: String\n) {\n  user(id: $userId) {\n    ...TodoList_user\n    id\n  }\n}\n\nfragment AddTodoMutation_user on User {\n  userId\n  id\n  totalCount\n}\n\nfragment ChangeTodoStatusMutation_todo on Todo {\n  id\n}\n\nfragment ChangeTodoStatusMutation_user on User {\n  id\n  userId\n  completedCount\n}\n\nfragment MarkAllTodosMutation_todoEdge on TodoEdge {\n  node {\n    id\n  }\n}\n\nfragment MarkAllTodosMutation_user on User {\n  id\n  userId\n  totalCount\n}\n\nfragment RemoveCompletedTodosMutation_todoConnection on TodoConnection {\n  edges {\n    node {\n      id\n      complete\n    }\n  }\n}\n\nfragment RemoveCompletedTodosMutation_user on User {\n  id\n  userId\n  totalCount\n}\n\nfragment RemoveTodoMutation_todo on Todo {\n  id\n  complete\n}\n\nfragment RemoveTodoMutation_user on User {\n  id\n  userId\n  totalCount\n  completedCount\n}\n\nfragment RenameTodoMutation_todo on Todo {\n  id\n  text\n}\n\nfragment TodoListFooter_todoConnection on TodoConnection {\n  ...RemoveCompletedTodosMutation_todoConnection\n}\n\nfragment TodoListFooter_user on User {\n  totalCount\n  completedCount\n  ...RemoveCompletedTodosMutation_user\n}\n\nfragment TodoList_user on User {\n  todos(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...Todo_todo\n        __typename\n      }\n      ...MarkAllTodosMutation_todoEdge\n      cursor\n    }\n    ...TodoListFooter_todoConnection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  totalCount\n  completedCount\n  ...AddTodoMutation_user\n  ...MarkAllTodosMutation_user\n  ...Todo_user\n  ...TodoListFooter_user\n}\n\nfragment Todo_todo on Todo {\n  complete\n  text\n  ...ChangeTodoStatusMutation_todo\n  ...RenameTodoMutation_todo\n  ...RemoveTodoMutation_todo\n}\n\nfragment Todo_user on User {\n  ...ChangeTodoStatusMutation_user\n  ...RemoveTodoMutation_user\n}\n"
  }
};
})();

(node/*: any*/).hash = "d5696185c72f8cf30be85baf1b3324a9";

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
