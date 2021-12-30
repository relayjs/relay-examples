/**
 * @generated SignedSource<<b563ca39789d85edeeb6ba30146037a7>>
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
export type Todo_todo$ref = Todo_todo$fragmentType;
export type Todo_todo$data = {|
  +complete: boolean,
  +id: string,
  +text: string,
  +$fragmentType: Todo_todo$fragmentType,
|};
export type Todo_todo = Todo_todo$data;
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

(node/*: any*/).hash = "1f979eb84ff026fe8a89323dd533d1fc";

module.exports = ((node/*: any*/)/*: Fragment<
  Todo_todo$fragmentType,
  Todo_todo$data,
>*/);
