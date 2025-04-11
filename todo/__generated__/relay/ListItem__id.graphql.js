/**
 * @generated SignedSource<<38b6687b57495337242be0553d2e0ffa>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ListItem__id$fragmentType: FragmentType;
export type ListItem__id$data = {|
  +id: string,
  +$fragmentType: ListItem__id$fragmentType,
|};
export type ListItem__id$key = {
  +$data?: ListItem__id$data,
  +$fragmentSpreads: ListItem__id$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListItem__id",
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
  "type": "ListItem",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  ListItem__id$fragmentType,
  ListItem__id$data,
>*/);
