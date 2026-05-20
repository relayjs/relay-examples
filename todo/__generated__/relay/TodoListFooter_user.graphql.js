/**
 * @generated SignedSource<<e3d1b55f8713544da46cfde57dc54e2d>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { RemoveCompletedTodosMutation_user$fragmentType } from "./RemoveCompletedTodosMutation_user.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoListFooter_user$fragmentType: FragmentType;
export type TodoListFooter_user$data = {|
  +completedCount: number,
  +totalCount: number,
  +$fragmentSpreads: RemoveCompletedTodosMutation_user$fragmentType,
  +$fragmentType: TodoListFooter_user$fragmentType,
|};
export type TodoListFooter_user$key = {
  +$data?: TodoListFooter_user$data,
  +$fragmentSpreads: TodoListFooter_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListFooter_user",
  "selections": [
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
      "name": "RemoveCompletedTodosMutation_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*:: as any*/).hash = "58e3bb4be554d7ad9751be4c219857c6";

export default ((node/*:: as any*/)/*:: as Fragment<
  TodoListFooter_user$fragmentType,
  TodoListFooter_user$data,
>*/);
