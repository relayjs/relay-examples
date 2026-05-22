/**
 * @generated SignedSource<<144a5adfcdb981410b53d91adfabf86d>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_user$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ChangeTodoStatusMutation_user" | "RemoveTodoMutation_user">;
  readonly " $fragmentType": "Todo_user";
};
export type Todo_user$key = {
  readonly " $data"?: Todo_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_user",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ChangeTodoStatusMutation_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveTodoMutation_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "68b442d6ced8e051053e9f8126209b6a";

export default node;
