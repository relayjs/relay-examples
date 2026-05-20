/**
 * @generated SignedSource<<607e67e05bb406f04561adb677a4690f>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RenameTodoMutation_todo$fragmentType: FragmentType;
export type RenameTodoMutation_todo$data = {|
  +id: string,
  +text: string,
  +$fragmentType: RenameTodoMutation_todo$fragmentType,
|};
export type RenameTodoMutation_todo$key = {
  +$data?: RenameTodoMutation_todo$data,
  +$fragmentSpreads: RenameTodoMutation_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RenameTodoMutation_todo",
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
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node/*:: as any*/).hash = "c76fbea69e179edd1284410a2f5be33f";

export default ((node/*:: as any*/)/*:: as Fragment<
  RenameTodoMutation_todo$fragmentType,
  RenameTodoMutation_todo$data,
>*/);
