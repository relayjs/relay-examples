/**
 * @generated SignedSource<<63476f2ddc9fbf002ed55cfd5c403bc9>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { ChangeTodoStatusMutation_todo$fragmentType } from "./ChangeTodoStatusMutation_todo.graphql";
import type { RemoveTodoMutation_todo$fragmentType } from "./RemoveTodoMutation_todo.graphql";
import type { RenameTodoMutation_todo$fragmentType } from "./RenameTodoMutation_todo.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type Todo_todo$fragmentType: FragmentType;
export type Todo_todo$data = {|
  +complete: boolean,
  +text: string,
  +$fragmentSpreads: ChangeTodoStatusMutation_todo$fragmentType & RemoveTodoMutation_todo$fragmentType & RenameTodoMutation_todo$fragmentType,
  +$fragmentType: Todo_todo$fragmentType,
|};
export type Todo_todo$key = {
  +$data?: Todo_todo$data,
  +$fragmentSpreads: Todo_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
  "selections": [
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ChangeTodoStatusMutation_todo"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RenameTodoMutation_todo"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveTodoMutation_todo"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "714929cac8f847585bb10b80faa2dbf2";

module.exports = ((node/*: any*/)/*: Fragment<
  Todo_todo$fragmentType,
  Todo_todo$data,
>*/);
