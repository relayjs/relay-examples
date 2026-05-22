/**
 * @generated SignedSource<<a59ffd133b9a63323e4161430d318ae9>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChangeTodoStatusMutation_user$data = {
  readonly completedCount: number;
  readonly id: string;
  readonly userId: string;
  readonly " $fragmentType": "ChangeTodoStatusMutation_user";
};
export type ChangeTodoStatusMutation_user$key = {
  readonly " $data"?: ChangeTodoStatusMutation_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChangeTodoStatusMutation_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangeTodoStatusMutation_user",
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
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1f20b0dc2be77984a9d2b89f4091bf2e";

export default node;
