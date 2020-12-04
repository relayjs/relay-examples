/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { TodoListFooter_user$ref } from "./TodoListFooter_user.graphql";
import type { TodoList_user$ref } from "./TodoList_user.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoApp_user$ref: FragmentReference;
declare export opaque type TodoApp_user$fragmentType: TodoApp_user$ref;
export type TodoApp_user = {|
  +id: string,
  +userId: string,
  +totalCount: number,
  +$fragmentRefs: TodoListFooter_user$ref & TodoList_user$ref,
  +$refType: TodoApp_user$ref,
|};
export type TodoApp_user$data = TodoApp_user;
export type TodoApp_user$key = {
  +$data?: TodoApp_user$data,
  +$fragmentRefs: TodoApp_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '2b7e5675921fb837e60dedfe29de4d93';

module.exports = node;
