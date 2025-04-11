/**
 * @generated SignedSource<<a603717faba0eaeaa601ac74e6cf942a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Todo_todo$fragmentType: FragmentType;
export type Todo_todo$data = {|
  +complete: boolean,
  +id: string,
  +text: string,
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
      "name": "id",
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

(node/*: any*/).hash = "9688ea4ed5397f08547476ec6b95d8d9";

module.exports = ((node/*: any*/)/*: Fragment<
  Todo_todo$fragmentType,
  Todo_todo$data,
>*/);
