/**
 * @generated SignedSource<<5f481bea2956441863ac1414266dd09a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ClientTodoList__id$fragmentType: FragmentType;
export type ClientTodoList__id$data = {|
  +id: string,
  +$fragmentType: ClientTodoList__id$fragmentType,
|};
export type ClientTodoList__id$key = {
  +$data?: ClientTodoList__id$data,
  +$fragmentSpreads: ClientTodoList__id$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientTodoList__id",
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
  "type": "ClientTodoList",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  ClientTodoList__id$fragmentType,
  ClientTodoList__id$data,
>*/);
