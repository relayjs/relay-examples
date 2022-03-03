/**
 * @generated SignedSource<<3653ec03c5468aff0096f5523c767575>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
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

(node/*: any*/).hash = "c76fbea69e179edd1284410a2f5be33f";

module.exports = ((node/*: any*/)/*: Fragment<
  RenameTodoMutation_todo$fragmentType,
  RenameTodoMutation_todo$data,
>*/);
