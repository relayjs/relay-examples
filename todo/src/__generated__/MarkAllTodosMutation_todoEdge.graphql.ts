/**
 * @generated SignedSource<<57d4aaa6837efbe36fb776d0bd52cabd>>
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
    "plural": true,
    "throwOnFieldError": true
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

(node as any).hash = "80eb0cf669bb29bb0b8e23019eb60de7";

export default node;
