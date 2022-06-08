/**
 * @generated SignedSource<<d47d273309ecbe7b7857936983f59f47>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveTodoMutation_todo$fragmentType: FragmentType;
export type RemoveTodoMutation_todo$data = {|
  +complete: boolean,
  +id: string,
  +$fragmentType: RemoveTodoMutation_todo$fragmentType,
|};
export type RemoveTodoMutation_todo$key = {
  +$data?: RemoveTodoMutation_todo$data,
  +$fragmentSpreads: RemoveTodoMutation_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveTodoMutation_todo",
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
      "name": "complete",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "f70027dd0aefa4b1f3deb9a1c977be71";

module.exports = ((node/*: any*/)/*: Fragment<
  RemoveTodoMutation_todo$fragmentType,
  RemoveTodoMutation_todo$data,
>*/);
