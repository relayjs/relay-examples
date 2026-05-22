/**
 * @generated SignedSource<<386b59828ec9e891cca24372aefba19c>>
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
  "metadata": {
    "throwOnFieldError": true
  },
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

(node as any).hash = "166ec49fce83d349f07a1ba306678248";

export default node;
