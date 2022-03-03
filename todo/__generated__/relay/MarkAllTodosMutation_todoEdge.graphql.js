/**
 * @generated SignedSource<<18a8b32c560813f69c420c11ef60bb14>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type MarkAllTodosMutation_todoEdge$fragmentType: FragmentType;
export type MarkAllTodosMutation_todoEdge$data = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
  |},
  +$fragmentType: MarkAllTodosMutation_todoEdge$fragmentType,
|}>;
export type MarkAllTodosMutation_todoEdge$key = $ReadOnlyArray<{
  +$data?: MarkAllTodosMutation_todoEdge$data,
  +$fragmentSpreads: MarkAllTodosMutation_todoEdge$fragmentType,
  ...
}>;
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "MarkAllTodosMutation_todoEdge",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TodoEdge",
  "abstractKey": null
};

(node/*: any*/).hash = "49419294a7d2cb7d3a5079eba46e7c54";

module.exports = ((node/*: any*/)/*: Fragment<
  MarkAllTodosMutation_todoEdge$fragmentType,
  MarkAllTodosMutation_todoEdge$data,
>*/);
