/**
 * @generated SignedSource<<4acb190cbf6a7cfc7fa80336068080a6>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveTodoMutation_user$fragmentType: FragmentType;
export type RemoveTodoMutation_user$data = {|
  +completedCount: number,
  +id: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: RemoveTodoMutation_user$fragmentType,
|};
export type RemoveTodoMutation_user$key = {
  +$data?: RemoveTodoMutation_user$data,
  +$fragmentSpreads: RemoveTodoMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveTodoMutation_user",
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

(node/*:: as any*/).hash = "d5790fd6961c3b2efd1e7bb67e15734e";

export default ((node/*:: as any*/)/*:: as Fragment<
  RemoveTodoMutation_user$fragmentType,
  RemoveTodoMutation_user$data,
>*/);
