/**
 * @generated SignedSource<<c42d29d966c6e870244bf60556f84562>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ChangeTodoStatusMutation_todo$fragmentType: FragmentType;
export type ChangeTodoStatusMutation_todo$data = {|
  +id: string,
  +$fragmentType: ChangeTodoStatusMutation_todo$fragmentType,
|};
export type ChangeTodoStatusMutation_todo$key = {
  +$data?: ChangeTodoStatusMutation_todo$data,
  +$fragmentSpreads: ChangeTodoStatusMutation_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangeTodoStatusMutation_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "7d84d947745ee0c48f58a1cd2d525caf";

module.exports = ((node/*: any*/)/*: Fragment<
  ChangeTodoStatusMutation_todo$fragmentType,
  ChangeTodoStatusMutation_todo$data,
>*/);
