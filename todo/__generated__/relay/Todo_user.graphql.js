/**
 * @generated SignedSource<<1de49c0a4c50dddcb7aa4dd0caba4675>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Todo_user$ref: FragmentReference;
declare export opaque type Todo_user$fragmentType: Todo_user$ref;
export type Todo_user = {|
  +id: string,
  +userId: string,
  +totalCount: number,
  +completedCount: number,
  +$refType: Todo_user$ref,
|};
export type Todo_user$data = Todo_user;
export type Todo_user$key = {
  +$data?: Todo_user$data,
  +$fragmentRefs: Todo_user$ref,
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

module.exports = node;
