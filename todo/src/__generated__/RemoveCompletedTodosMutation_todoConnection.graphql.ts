/**
 * @generated SignedSource<<8ada8cec3bbba5ff2b883f832de63f6f>>
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

(node as any).hash = "5a2052408b9a995f2635949998ec0eba";

export default node;
