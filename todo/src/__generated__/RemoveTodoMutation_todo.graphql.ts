/**
 * @generated SignedSource<<4f5e8f88c39944c065e9d78075e9d6e8>>
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
  "metadata": null,
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

(node as any).hash = "f70027dd0aefa4b1f3deb9a1c977be71";

export default node;
