/**
 * @generated SignedSource<<a79cac49aeb5f01a9d71a2e32db6fc31>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Todo_user$fragmentType: FragmentType;
export type Todo_user$ref = Todo_user$fragmentType;
export type Todo_user$data = {|
  +id: string,
  +userId: string,
  +totalCount: number,
  +completedCount: number,
  +$fragmentType: Todo_user$fragmentType,
|};
export type Todo_user = Todo_user$data;
export type Todo_user$key = {
  +$data?: Todo_user$data,
  +$fragmentSpreads: Todo_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_user",
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
      "name": "totalCount",
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

(node/*: any*/).hash = "7d4a99e73771e30c8a0ba7cb397430e3";

module.exports = ((node/*: any*/)/*: Fragment<
  Todo_user$fragmentType,
  Todo_user$data,
>*/);
