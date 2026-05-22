/**
 * @generated SignedSource<<44df210458f7ab10c3c0215a929cc71a>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChangeTodoStatusMutation_todo$data = {
  readonly id: string;
  readonly " $fragmentType": "ChangeTodoStatusMutation_todo";
};
export type ChangeTodoStatusMutation_todo$key = {
  readonly " $data"?: ChangeTodoStatusMutation_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChangeTodoStatusMutation_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangeTodoStatusMutation_todo",
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

(node as any).hash = "7d84d947745ee0c48f58a1cd2d525caf";

export default node;
