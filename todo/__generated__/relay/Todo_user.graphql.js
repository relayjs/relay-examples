/**
 * @generated SignedSource<<f956a9f086815c41f3a9410a79de184c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { ChangeTodoStatusMutation_user$fragmentType } from "./ChangeTodoStatusMutation_user.graphql";
import type { RemoveTodoMutation_user$fragmentType } from "./RemoveTodoMutation_user.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type Todo_user$fragmentType: FragmentType;
export type Todo_user$data = {|
  +$fragmentSpreads: ChangeTodoStatusMutation_user$fragmentType & RemoveTodoMutation_user$fragmentType,
  +$fragmentType: Todo_user$fragmentType,
|};
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ChangeTodoStatusMutation_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveTodoMutation_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "68b442d6ced8e051053e9f8126209b6a";

module.exports = ((node/*: any*/)/*: Fragment<
  Todo_user$fragmentType,
  Todo_user$data,
>*/);
