/**
 * @generated SignedSource<<315e1c088aefb3e583e9f564745710a2>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RenameTodoMutation_todo$data = {
  readonly id: string;
  readonly " $fragmentType": "RenameTodoMutation_todo";
};
export type RenameTodoMutation_todo$key = {
  readonly " $data"?: RenameTodoMutation_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"RenameTodoMutation_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "RenameTodoMutation_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "5e334aca8244285c8d901b3e5955aad6";

export default node;
