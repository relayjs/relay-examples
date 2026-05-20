/**
 * @generated SignedSource<<6a59c1674a45ace6b5bbe96eea1a2fc4>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ChangeTodoStatusMutation_user$fragmentType: FragmentType;
export type ChangeTodoStatusMutation_user$data = {|
  +completedCount: number,
  +id: string,
  +userId: string,
  +$fragmentType: ChangeTodoStatusMutation_user$fragmentType,
|};
export type ChangeTodoStatusMutation_user$key = {
  +$data?: ChangeTodoStatusMutation_user$data,
  +$fragmentSpreads: ChangeTodoStatusMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangeTodoStatusMutation_user",
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
      "name": "completedCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*:: as any*/).hash = "1f20b0dc2be77984a9d2b89f4091bf2e";

export default ((node/*:: as any*/)/*:: as Fragment<
  ChangeTodoStatusMutation_user$fragmentType,
  ChangeTodoStatusMutation_user$data,
>*/);
