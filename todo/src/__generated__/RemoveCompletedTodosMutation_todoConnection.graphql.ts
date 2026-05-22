/**
 * @generated SignedSource<<df766a2a68763980d6071f0050f4e4c9>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RemoveCompletedTodosMutation_todoConnection$data = {
  readonly __id: string;
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly complete: boolean;
      readonly id: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "RemoveCompletedTodosMutation_todoConnection";
};
export type RemoveCompletedTodosMutation_todoConnection$key = {
  readonly " $data"?: RemoveCompletedTodosMutation_todoConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"RemoveCompletedTodosMutation_todoConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
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

(node as any).hash = "81576ad645dc43f4bc668eddf805ecdc";

export default node;
