/**
 * @generated SignedSource<<dfb5576d291b64372080304f6b8e70c1>>
 * @flow
 * @lightSyntaxTransform
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

(node/*:: as any*/).hash = "7d84d947745ee0c48f58a1cd2d525caf";

export default ((node/*:: as any*/)/*:: as Fragment<
  ChangeTodoStatusMutation_todo$fragmentType,
  ChangeTodoStatusMutation_todo$data,
>*/);
