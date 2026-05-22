/**
 * @generated SignedSource<<f9d9e09c4c737c046e1d545b3549b415>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_todo$data = {
  readonly complete: boolean;
  readonly text: string;
  readonly " $fragmentSpreads": FragmentRefs<"ChangeTodoStatusMutation_todo" | "RemoveTodoMutation_todo" | "RenameTodoMutation_todo">;
  readonly " $fragmentType": "Todo_todo";
};
export type Todo_todo$key = {
  readonly " $data"?: Todo_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "complete",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ChangeTodoStatusMutation_todo"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RenameTodoMutation_todo"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveTodoMutation_todo"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "714929cac8f847585bb10b80faa2dbf2";

export default node;
