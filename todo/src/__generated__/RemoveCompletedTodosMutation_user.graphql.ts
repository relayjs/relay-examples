/**
 * @generated SignedSource<<2edb8ebd02fe9ac244b11426a92e8d0d>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RemoveCompletedTodosMutation_user$data = {
  readonly id: string;
  readonly totalCount: number;
  readonly userId: string;
  readonly " $fragmentType": "RemoveCompletedTodosMutation_user";
};
export type RemoveCompletedTodosMutation_user$key = {
  readonly " $data"?: RemoveCompletedTodosMutation_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"RemoveCompletedTodosMutation_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "RemoveCompletedTodosMutation_user",
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
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "cc0c9aa55793ded75ff4ca2e4013ef41";

export default node;
