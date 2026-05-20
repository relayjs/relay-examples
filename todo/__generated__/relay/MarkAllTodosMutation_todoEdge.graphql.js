/**
 * @generated SignedSource<<7143e161cf520e76a9c470ee30e4bf48>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type MarkAllTodosMutation_todoEdge$fragmentType: FragmentType;
export type MarkAllTodosMutation_todoEdge$data = ReadonlyArray<{|
  +node: ?{|
    +id: string,
  |},
  +$fragmentType: MarkAllTodosMutation_todoEdge$fragmentType,
|}>;
export type MarkAllTodosMutation_todoEdge$key = ReadonlyArray<{
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

(node/*:: as any*/).hash = "49419294a7d2cb7d3a5079eba46e7c54";

export default ((node/*:: as any*/)/*:: as Fragment<
  MarkAllTodosMutation_todoEdge$fragmentType,
  MarkAllTodosMutation_todoEdge$data,
>*/);
