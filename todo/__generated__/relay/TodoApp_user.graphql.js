/**
 * @generated SignedSource<<d36142e137717f52f3148d59f0a608b0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { TodoListFooter_user$fragmentType } from "./TodoListFooter_user.graphql";
import type { TodoList_user$fragmentType } from "./TodoList_user.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoApp_user$fragmentType: FragmentType;
export type TodoApp_user$ref = TodoApp_user$fragmentType;
export type TodoApp_user$data = {|
  +id: string,
  +userId: string,
  +totalCount: number,
  +$fragmentSpreads: TodoListFooter_user$fragmentType & TodoList_user$fragmentType,
  +$fragmentType: TodoApp_user$fragmentType,
|};
export type TodoApp_user = TodoApp_user$data;
export type TodoApp_user$key = {
  +$data?: TodoApp_user$data,
  +$fragmentSpreads: TodoApp_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoApp_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "TodoListFooter_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TodoList_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "2b7e5675921fb837e60dedfe29de4d93";

module.exports = ((node/*: any*/)/*: Fragment<
  TodoApp_user$fragmentType,
  TodoApp_user$data,
>*/);
