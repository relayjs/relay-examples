/**
 * @generated SignedSource<<84460ceba65a3b608c3be46a40e6011c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoListItem__id$fragmentType: FragmentType;
export type TodoListItem__id$data = {|
  +id: string,
  +$fragmentType: TodoListItem__id$fragmentType,
|};
export type TodoListItem__id$key = {
  +$data?: TodoListItem__id$data,
  +$fragmentSpreads: TodoListItem__id$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem__id",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "TodoListItem",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  TodoListItem__id$fragmentType,
  TodoListItem__id$data,
>*/);
