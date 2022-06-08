/**
 * @generated SignedSource<<92adb9550d351b1b52bacb82b7b0d831>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveCompletedTodosMutation_todoConnection$fragmentType: FragmentType;
export type RemoveCompletedTodosMutation_todoConnection$data = {|
  +__id: string,
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +complete: boolean,
      +id: string,
    |},
  |}>,
  +$fragmentType: RemoveCompletedTodosMutation_todoConnection$fragmentType,
|};
export type RemoveCompletedTodosMutation_todoConnection$key = {
  +$data?: RemoveCompletedTodosMutation_todoConnection$data,
  +$fragmentSpreads: RemoveCompletedTodosMutation_todoConnection$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveCompletedTodosMutation_todoConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TodoEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "complete",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "TodoConnection",
  "abstractKey": null
};

(node/*: any*/).hash = "5a2052408b9a995f2635949998ec0eba";

module.exports = ((node/*: any*/)/*: Fragment<
  RemoveCompletedTodosMutation_todoConnection$fragmentType,
  RemoveCompletedTodosMutation_todoConnection$data,
>*/);
