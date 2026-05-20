/**
 * @generated SignedSource<<c32ba4842d3f3365208340b235bd5076>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveCompletedTodosMutation_user$fragmentType: FragmentType;
export type RemoveCompletedTodosMutation_user$data = {|
  +id: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: RemoveCompletedTodosMutation_user$fragmentType,
|};
export type RemoveCompletedTodosMutation_user$key = {
  +$data?: RemoveCompletedTodosMutation_user$data,
  +$fragmentSpreads: RemoveCompletedTodosMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveCompletedTodosMutation_user",
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

(node/*:: as any*/).hash = "7794ab5773d5e5e628ab453eec590be2";

export default ((node/*:: as any*/)/*:: as Fragment<
  RemoveCompletedTodosMutation_user$fragmentType,
  RemoveCompletedTodosMutation_user$data,
>*/);
