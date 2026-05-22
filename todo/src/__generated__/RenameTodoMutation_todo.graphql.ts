/**
 * @generated SignedSource<<92a268a0f5d03477ea9d291989c9fa25>>
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
  "metadata": null,
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

(node as any).hash = "80ecc77ff05c5ce6d8de27f639e01ff7";

export default node;
