/**
 * @generated SignedSource<<31a8c8591b590def83afa58a0e60a805>>
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
  "metadata": null,
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

(node as any).hash = "7794ab5773d5e5e628ab453eec590be2";

export default node;
