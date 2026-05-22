/**
 * @generated SignedSource<<8d85371be826e8a78f2a9ea2414b80ef>>
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
  "metadata": {
    "throwOnFieldError": true
  },
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

(node as any).hash = "1d37ab489759f235d294dc2aae608e97";

export default node;
