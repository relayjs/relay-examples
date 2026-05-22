/**
 * @generated SignedSource<<ff6e896bc4c864b9dfe59c3e16e85876>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarkAllTodosMutation_todoEdge$data = ReadonlyArray<{
  readonly node: {
    readonly id: string;
  } | null | undefined;
  readonly " $fragmentType": "MarkAllTodosMutation_todoEdge";
}>;
export type MarkAllTodosMutation_todoEdge$key = ReadonlyArray<{
  readonly " $data"?: MarkAllTodosMutation_todoEdge$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarkAllTodosMutation_todoEdge">;
}>;

const node: ReaderFragment = {
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

(node as any).hash = "49419294a7d2cb7d3a5079eba46e7c54";

export default node;
