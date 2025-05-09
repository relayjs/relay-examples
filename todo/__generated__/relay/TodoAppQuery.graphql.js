/**
 * @generated SignedSource<<4621279e5edc67eba755b4fbdd501256>>
 * @relayHash 8414dcd4ff3b9e8a93b8f25346295d80
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 8414dcd4ff3b9e8a93b8f25346295d80

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { DataID } from "relay-runtime";
import type { Todo_todo$fragmentType } from "./Todo_todo.graphql";
import type { Todo_user$fragmentType } from "./Todo_user.graphql";
import type { ClientTodoList____relay_model_instance$data } from "./ClientTodoList____relay_model_instance.graphql";
import type { TodoListItem____relay_model_instance$data } from "./TodoListItem____relay_model_instance.graphql";
import {items as clientTodoListItemsResolverType} from "../../js/resolvers/ClientTodoList.js";
// Type assertion validating that `clientTodoListItemsResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(clientTodoListItemsResolverType: (
  __relay_model_instance: ClientTodoList____relay_model_instance$data['__relay_model_instance'],
) => ?$ReadOnlyArray<?{|
  +id: DataID,
|}>);
import {clientTodoList as queryClientTodoListResolverType} from "../../js/resolvers/Query.js";
// Type assertion validating that `queryClientTodoListResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryClientTodoListResolverType: () => ?{|
  +id: DataID,
|});
import {todo as todoListItemTodoResolverType} from "../../js/resolvers/ClientTodoList.js";
// Type assertion validating that `todoListItemTodoResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoListItemTodoResolverType: (
  __relay_model_instance: TodoListItem____relay_model_instance$data['__relay_model_instance'],
) => ?{|
  +id: DataID,
|});
export type TodoAppQuery$variables = {|
  userId?: ?string,
|};
export type TodoAppQuery$data = {|
  +clientTodoList: ?{|
    +items: ?$ReadOnlyArray<?{|
      +todo: ?{|
        +$fragmentSpreads: Todo_todo$fragmentType,
      |},
    |}>,
  |},
  +user: {|
    +todos: ?{|
      +__id: string,
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
        |},
      |}>,
    |},
    +$fragmentSpreads: Todo_user$fragmentType,
  |},
|};
export type TodoAppQuery = {|
  response: TodoAppQuery$data,
  variables: TodoAppQuery$variables,
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
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
          (v2/*: any*/),
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
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v5 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
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
              "name": "Todo_user"
            },
            {
              "alias": "todos",
              "args": null,
              "concreteType": "TodoConnection",
              "kind": "LinkedField",
              "name": "__TodoList_todos_connection",
              "plural": false,
              "selections": (v3/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      },
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "ClientTodoList",
        "modelResolvers": {
          "ClientTodoList": {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ClientTodoList__id"
            },
            "kind": "RelayResolver",
            "name": "clientTodoList",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./ClientTodoList__id.graphql'), require('./../../js/resolvers/ClientTodoList').ClientTodoList, 'id', true),
            "path": "clientTodoList.__relay_model_instance"
          }
        },
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "name": "clientTodoList",
          "resolverModule": require('./../../js/resolvers/Query').clientTodoList,
          "path": "clientTodoList"
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "ClientTodoList",
          "kind": "LinkedField",
          "name": "clientTodoList",
          "plural": false,
          "selections": [
            {
              "kind": "ClientEdgeToClientObject",
              "concreteType": "TodoListItem",
              "modelResolvers": {
                "TodoListItem": {
                  "alias": null,
                  "args": null,
                  "fragment": {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TodoListItem__id"
                  },
                  "kind": "RelayResolver",
                  "name": "items",
                  "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./TodoListItem__id.graphql'), require('./../../js/resolvers/ClientTodoList').TodoListItem, 'id', true),
                  "path": "clientTodoList.items.__relay_model_instance"
                }
              },
              "backingField": {
                "alias": null,
                "args": null,
                "fragment": {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ClientTodoList____relay_model_instance"
                },
                "kind": "RelayResolver",
                "name": "items",
                "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./ClientTodoList____relay_model_instance.graphql'), require('./../../js/resolvers/ClientTodoList').items, '__relay_model_instance', true),
                "path": "clientTodoList.items"
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "TodoListItem",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": [
                  {
                    "kind": "ClientEdgeToServerObject",
                    "operation": require('./ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo.graphql'),
                    "backingField": {
                      "alias": null,
                      "args": null,
                      "fragment": {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "TodoListItem____relay_model_instance"
                      },
                      "kind": "RelayResolver",
                      "name": "todo",
                      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./TodoListItem____relay_model_instance.graphql'), require('./../../js/resolvers/ClientTodoList').todo, '__relay_model_instance', true),
                      "path": "clientTodoList.items.todo"
                    },
                    "linkedField": {
                      "alias": null,
                      "args": null,
                      "concreteType": "Todo",
                      "kind": "LinkedField",
                      "name": "todo",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "Todo_todo"
                        }
                      ],
                      "storageKey": null
                    }
                  }
                ],
                "storageKey": null
              }
            }
          ],
          "storageKey": null
        }
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
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userId",
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
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "TodoConnection",
            "kind": "LinkedField",
            "name": "todos",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": "todos(first:10)"
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "TodoList_todos",
            "kind": "LinkedHandle",
            "name": "todos"
          }
        ],
        "storageKey": null
      },
      {
        "kind": "ClientEdgeToClientObject",
        "backingField": {
          "name": "clientTodoList",
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "ClientTodoList",
          "kind": "LinkedField",
          "name": "clientTodoList",
          "plural": false,
          "selections": [
            {
              "kind": "ClientEdgeToClientObject",
              "backingField": {
                "name": "items",
                "args": null,
                "fragment": {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "name": "__relay_model_instance",
                      "args": null,
                      "fragment": {
                        "kind": "InlineFragment",
                        "selections": (v5/*: any*/),
                        "type": "ClientTodoList",
                        "abstractKey": null
                      },
                      "kind": "RelayResolver",
                      "storageKey": null,
                      "isOutputType": false
                    }
                  ],
                  "type": "ClientTodoList",
                  "abstractKey": null
                },
                "kind": "RelayResolver",
                "storageKey": null,
                "isOutputType": false
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "TodoListItem",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": [
                  {
                    "name": "todo",
                    "args": null,
                    "fragment": {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "name": "__relay_model_instance",
                          "args": null,
                          "fragment": {
                            "kind": "InlineFragment",
                            "selections": (v5/*: any*/),
                            "type": "TodoListItem",
                            "abstractKey": null
                          },
                          "kind": "RelayResolver",
                          "storageKey": null,
                          "isOutputType": false
                        }
                      ],
                      "type": "TodoListItem",
                      "abstractKey": null
                    },
                    "kind": "RelayResolver",
                    "storageKey": null,
                    "isOutputType": false
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            },
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      }
    ]
  },
  "params": {
    "id": "8414dcd4ff3b9e8a93b8f25346295d80",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "user",
            "todos"
          ]
        }
      ]
    },
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*: any*/).hash = "18632abaf19328551dd7b5862d8ee194";

require('relay-runtime').PreloadableQueryRegistry.set((node.params/*: any*/).id, node);

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
