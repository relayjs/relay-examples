/**
 * @generated SignedSource<<a51a4f1bca76e56ac7427324ff0fceb3>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RemoveTodoMutation_todo$data = {
  readonly complete: boolean;
  readonly id: string;
  readonly " $fragmentType": "RemoveTodoMutation_todo";
};
export type RemoveTodoMutation_todo$key = {
  readonly " $data"?: RemoveTodoMutation_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"RemoveTodoMutation_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "RemoveTodoMutation_todo",
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
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "c584fdb690fe7aa39010a3e9784eab3b";

export default node;
