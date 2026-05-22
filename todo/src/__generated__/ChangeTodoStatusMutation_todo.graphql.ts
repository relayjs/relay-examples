/**
 * @generated SignedSource<<89e4d6fbe88c85de1c6557a19d5501d7>>
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
  "metadata": {
    "throwOnFieldError": true
  },
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

(node as any).hash = "72e43204c75092d307a28abc391ffd26";

export default node;
