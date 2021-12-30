/**
 * @generated SignedSource<<4d50ca09a8767b91ebfa0ca026adbaa2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { Todo_todo$fragmentType } from "./Todo_todo.graphql";
import type { Todo_user$fragmentType } from "./Todo_user.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoList_user$fragmentType: FragmentType;
export type TodoList_user$ref = TodoList_user$fragmentType;
export type TodoList_user$data = {|
  +todos: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +complete: boolean,
        +$fragmentSpreads: Todo_todo$fragmentType,
      |},
    |}>,
  |},
  +id: string,
  +userId: string,
  +totalCount: number,
  +completedCount: number,
  +$fragmentSpreads: Todo_user$fragmentType,
  +$fragmentType: TodoList_user$fragmentType,
|};
export type TodoList_user = TodoList_user$data;
export type TodoList_user$key = {
  +$data?: TodoList_user$data,
  +$fragmentSpreads: TodoList_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
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
  "name": "TodoList_user",
  "selections": [
    {
      "alias": "todos",
      "args": null,
      "concreteType": "TodoConnection",
      "kind": "LinkedField",
      "name": "__TodoList_todos_connection",
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "complete",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Todo_todo"
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
      "storageKey": null
    },
    (v0/*: any*/),
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "Todo_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node/*: any*/).hash = "4c169798c328a2b4d9b4ae5227d016bb";

module.exports = ((node/*: any*/)/*: Fragment<
  TodoList_user$fragmentType,
  TodoList_user$data,
>*/);
