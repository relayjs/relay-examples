/**
 * @generated SignedSource<<e527a3cbb6958c64ac5c14b12c0063e7>>
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
  "metadata": {
    "throwOnFieldError": true
  },
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

(node as any).hash = "d6dbeab18efa4676e85aa87f047f4c4a";

export default node;
