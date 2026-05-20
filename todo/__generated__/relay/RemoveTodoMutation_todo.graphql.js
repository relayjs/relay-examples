/**
 * @generated SignedSource<<3aaa686c837e9665995d048959430614>>
 * @flow
 * @lightSyntaxTransform
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

(node/*:: as any*/).hash = "f70027dd0aefa4b1f3deb9a1c977be71";

export default ((node/*:: as any*/)/*:: as Fragment<
  RemoveTodoMutation_todo$fragmentType,
  RemoveTodoMutation_todo$data,
>*/);
