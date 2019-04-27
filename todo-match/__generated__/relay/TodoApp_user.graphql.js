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
export type TodoApp_user = {|
  +id: string,
  +userId: string,
  +totalCount: number,
  +$fragmentRefs: TodoListFooter_user$ref & TodoList_user$ref,
  +$refType: TodoApp_user$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TodoApp_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "kind": "FragmentSpread",
      "name": "TodoListFooter_user",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TodoList_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2b7e5675921fb837e60dedfe29de4d93';
module.exports = node;
