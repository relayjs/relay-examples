/**
 * @generated SignedSource<<d73e46ac2a67bf0b89d51296b457c0d3>>
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
export type AddTodoMutation_user$ref = AddTodoMutation_user$fragmentType;
export type AddTodoMutation_user$data = {|
  +userId: string,
  +id: string,
  +totalCount: number,
  +$fragmentType: AddTodoMutation_user$fragmentType,
|};
export type AddTodoMutation_user = AddTodoMutation_user$data;
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
