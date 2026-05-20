/**
 * @generated SignedSource<<efe2f108ed364f24564e3f834aa89bba>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type MarkAllTodosMutation_user$fragmentType: FragmentType;
export type MarkAllTodosMutation_user$data = {|
  +id: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: MarkAllTodosMutation_user$fragmentType,
|};
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

(node/*:: as any*/).hash = "1c83b63e685c83d6fa657d808ae754eb";

export default ((node/*:: as any*/)/*:: as Fragment<
  MarkAllTodosMutation_user$fragmentType,
  MarkAllTodosMutation_user$data,
>*/);
