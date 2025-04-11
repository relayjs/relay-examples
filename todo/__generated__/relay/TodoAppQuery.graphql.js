/**
 * @generated SignedSource<<9fcba97c33e1755412fffaa515f632cf>>
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
import type { ListItem____relay_model_instance$data } from "./ListItem____relay_model_instance.graphql";
import type { LocalPlayerQueue____relay_model_instance$data } from "./LocalPlayerQueue____relay_model_instance.graphql";
import {todo as listItemTodoResolverType} from "../../js/resolvers/LocalPlayerQueue.js";
// Type assertion validating that `listItemTodoResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(listItemTodoResolverType: (
  __relay_model_instance: ListItem____relay_model_instance$data['__relay_model_instance'],
) => ?{|
  +id: DataID,
|});
import {list as localPlayerQueueListResolverType} from "../../js/resolvers/LocalPlayerQueue.js";
// Type assertion validating that `localPlayerQueueListResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(localPlayerQueueListResolverType: (
  __relay_model_instance: LocalPlayerQueue____relay_model_instance$data['__relay_model_instance'],
) => ?$ReadOnlyArray<?{|
  +id: DataID,
|}>);
import {localPlayerQueue as queryLocalPlayerQueueResolverType} from "../../js/resolvers/Query.js";
// Type assertion validating that `queryLocalPlayerQueueResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryLocalPlayerQueueResolverType: () => ?{|
  +id: DataID,
|});
export type TodoAppQuery$variables = {|
  userId?: ?string,
|};
export type TodoAppQuery$data = {|
  +localPlayerQueue: ?{|
    +list: ?$ReadOnlyArray<?{|
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
        "concreteType": "LocalPlayerQueue",
        "modelResolvers": {
          "LocalPlayerQueue": {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "LocalPlayerQueue__id"
            },
            "kind": "RelayResolver",
            "name": "localPlayerQueue",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./LocalPlayerQueue__id.graphql'), require('./../../js/resolvers/LocalPlayerQueue').LocalPlayerQueue, 'id', true),
            "path": "localPlayerQueue.__relay_model_instance"
          }
        },
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "name": "localPlayerQueue",
          "resolverModule": require('./../../js/resolvers/Query').localPlayerQueue,
          "path": "localPlayerQueue"
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "LocalPlayerQueue",
          "kind": "LinkedField",
          "name": "localPlayerQueue",
          "plural": false,
          "selections": [
            {
              "kind": "ClientEdgeToClientObject",
              "concreteType": "ListItem",
              "modelResolvers": {
                "ListItem": {
                  "alias": null,
                  "args": null,
                  "fragment": {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ListItem__id"
                  },
                  "kind": "RelayResolver",
                  "name": "list",
                  "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./ListItem__id.graphql'), require('./../../js/resolvers/LocalPlayerQueue').ListItem, 'id', true),
                  "path": "localPlayerQueue.list.__relay_model_instance"
                }
              },
              "backingField": {
                "alias": null,
                "args": null,
                "fragment": {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LocalPlayerQueue____relay_model_instance"
                },
                "kind": "RelayResolver",
                "name": "list",
                "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./LocalPlayerQueue____relay_model_instance.graphql'), require('./../../js/resolvers/LocalPlayerQueue').list, '__relay_model_instance', true),
                "path": "localPlayerQueue.list"
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "ListItem",
                "kind": "LinkedField",
                "name": "list",
                "plural": true,
                "selections": [
                  {
                    "kind": "ClientEdgeToServerObject",
                    "operation": require('./ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo.graphql'),
                    "backingField": {
                      "alias": null,
                      "args": null,
                      "fragment": {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ListItem____relay_model_instance"
                      },
                      "kind": "RelayResolver",
                      "name": "todo",
                      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./ListItem____relay_model_instance.graphql'), require('./../../js/resolvers/LocalPlayerQueue').todo, '__relay_model_instance', true),
                      "path": "localPlayerQueue.list.todo"
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
          "name": "localPlayerQueue",
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "LocalPlayerQueue",
          "kind": "LinkedField",
          "name": "localPlayerQueue",
          "plural": false,
          "selections": [
            {
              "kind": "ClientEdgeToClientObject",
              "backingField": {
                "name": "list",
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
                        "type": "LocalPlayerQueue",
                        "abstractKey": null
                      },
                      "kind": "RelayResolver",
                      "storageKey": null,
                      "isOutputType": false
                    }
                  ],
                  "type": "LocalPlayerQueue",
                  "abstractKey": null
                },
                "kind": "RelayResolver",
                "storageKey": null,
                "isOutputType": false
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "ListItem",
                "kind": "LinkedField",
                "name": "list",
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
                            "type": "ListItem",
                            "abstractKey": null
                          },
                          "kind": "RelayResolver",
                          "storageKey": null,
                          "isOutputType": false
                        }
                      ],
                      "type": "ListItem",
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

(node/*: any*/).hash = "27bd3ae687d0b9fb0f4c64abf83274ef";

require('relay-runtime').PreloadableQueryRegistry.set((node.params/*: any*/).id, node);

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
