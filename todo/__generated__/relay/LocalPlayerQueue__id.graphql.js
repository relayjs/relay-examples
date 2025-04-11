/**
 * @generated SignedSource<<4c749aa174b31b78b657a339f583ec52>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type LocalPlayerQueue__id$fragmentType: FragmentType;
export type LocalPlayerQueue__id$data = {|
  +id: string,
  +$fragmentType: LocalPlayerQueue__id$fragmentType,
|};
export type LocalPlayerQueue__id$key = {
  +$data?: LocalPlayerQueue__id$data,
  +$fragmentSpreads: LocalPlayerQueue__id$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocalPlayerQueue__id",
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
  "type": "LocalPlayerQueue",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  LocalPlayerQueue__id$fragmentType,
  LocalPlayerQueue__id$data,
>*/);
