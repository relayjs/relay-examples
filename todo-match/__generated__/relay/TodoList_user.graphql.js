/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { Todo_todo$ref } from "./Todo_todo.graphql";
import type { Todo_user$ref } from "./Todo_user.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoList_user$ref: FragmentReference;
declare export opaque type TodoList_user$fragmentType: TodoList_user$ref;
export type TodoList_user = {|
  +todos: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +complete: boolean,
        +__fragmentPropName?: ?string,
        +__module_component: ?string,
        +$fragmentRefs: Todo_todo$ref,
      |}
    |}>
  |},
  +id: string,
  +userId: string,
  +totalCount: number,
  +completedCount: number,
  +$fragmentRefs: Todo_user$ref,
  +$refType: TodoList_user$ref,
|};
export type TodoList_user$data = TodoList_user;
export type TodoList_user$key = {
  +$data?: TodoList_user$data,
  +$fragmentRefs: TodoList_user$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "TodoList_user",
  "type": "User",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "todos"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "todos",
      "name": "__TodoList_todos_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "TodoConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "TodoEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Todo",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "complete",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": "__module_component",
                  "name": "js",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "module",
                      "value": "Todo"
                    }
                  ],
                  "storageKey": "__module_component"
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ModuleImport",
                  "fragmentPropName": "todo",
                  "fragmentName": "Todo_todo"
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "userId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "completedCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Todo_user",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7324454150299a2e165c955d7e53fff4';
module.exports = node;
