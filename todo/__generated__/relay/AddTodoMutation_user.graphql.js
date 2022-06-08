/**
 * @generated SignedSource<<4527e135aa6f1e3d21cb07862f68ac54>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type AddTodoMutation_user$fragmentType: FragmentType;
export type AddTodoMutation_user$data = {|
  +id: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: AddTodoMutation_user$fragmentType,
|};
export type AddTodoMutation_user$key = {
  +$data?: AddTodoMutation_user$data,
  +$fragmentSpreads: AddTodoMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddTodoMutation_user",
  "selections": [
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
      "name": "id",
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

(node/*: any*/).hash = "5bca57176615f5cef2becfb008d2c037";

module.exports = ((node/*: any*/)/*: Fragment<
  AddTodoMutation_user$fragmentType,
  AddTodoMutation_user$data,
>*/);
