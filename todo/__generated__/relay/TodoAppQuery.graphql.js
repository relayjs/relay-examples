/**
 * @generated SignedSource<<9c1f0f637a9b8cd820358df28dc8092f>>
 * @relayHash 8a75762b2e92a08aeb1007fc11f71298
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

// @relayRequestID 8a75762b2e92a08aeb1007fc11f71298

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { TodoList_user$fragmentType } from "./TodoList_user.graphql";
export type TodoAppQuery$variables = {|
  userId?: ?string,
|};
export type TodoAppQuery$data = {|
  +user: {|
    +$fragmentSpreads: TodoList_user$fragmentType,
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
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoAppQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*:: as any*/),
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
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "TodoAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*:: as any*/),
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
                      (v3/*:: as any*/),
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
            "args": (v2/*:: as any*/),
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
          (v3/*:: as any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "8a75762b2e92a08aeb1007fc11f71298",
    "metadata": {},
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*:: as any*/).hash = "021cf002a0c5c39c772369311b469cec";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set((node.params/*:: as any*/).id, node);

export default ((node/*:: as any*/)/*:: as Query<
  TodoAppQuery$variables,
  TodoAppQuery$data,
>*/);
