/**
 * @generated SignedSource<<208ae73d14e062b596fe916085b86982>>
 * @relayHash c0ca9b2b2cdfb4860dff59bf167d619e
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID c0ca9b2b2cdfb4860dff59bf167d619e

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
                        "selections": (v3/*: any*/),
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
                            "selections": (v3/*: any*/),
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
    "id": "c0ca9b2b2cdfb4860dff59bf167d619e",
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*: any*/).hash = "b170dd5c8ebeb14f4e05b3b7b4bde6ef";

require('relay-runtime').PreloadableQueryRegistry.set((node.params/*: any*/).id, node);

module.exports = ((node/*: any*/)/*: Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
