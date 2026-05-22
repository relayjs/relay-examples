/**
 * @generated SignedSource<<5dd48b563b3e273c397a20ae4ad4f487>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RemoveTodoMutation_user$data = {
  readonly completedCount: number;
  readonly id: string;
  readonly totalCount: number;
  readonly userId: string;
  readonly " $fragmentType": "RemoveTodoMutation_user";
};
export type RemoveTodoMutation_user$key = {
  readonly " $data"?: RemoveTodoMutation_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"RemoveTodoMutation_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "RemoveTodoMutation_user",
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

(node as any).hash = "756787a2ac105777d0cf39fbc2a9f4a9";

export default node;
