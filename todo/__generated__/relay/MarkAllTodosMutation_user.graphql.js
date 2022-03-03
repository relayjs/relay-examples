/**
 * @generated SignedSource<<9a0e607f0618f2bde3bfa47db8e1e140>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type MarkAllTodosMutation_user$fragmentType: FragmentType;
export type MarkAllTodosMutation_user$ref = MarkAllTodosMutation_user$fragmentType;
export type MarkAllTodosMutation_user$data = {|
  +id: string,
  +userId: string,
  +totalCount: number,
  +$fragmentType: MarkAllTodosMutation_user$fragmentType,
|};
export type MarkAllTodosMutation_user = MarkAllTodosMutation_user$data;
export type MarkAllTodosMutation_user$key = {
  +$data?: MarkAllTodosMutation_user$data,
  +$fragmentSpreads: MarkAllTodosMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarkAllTodosMutation_user",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "1c83b63e685c83d6fa657d808ae754eb";

module.exports = ((node/*: any*/)/*: Fragment<
  MarkAllTodosMutation_user$fragmentType,
  MarkAllTodosMutation_user$data,
>*/);
