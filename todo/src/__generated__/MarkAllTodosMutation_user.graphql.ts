/**
 * @generated SignedSource<<29018ec1a4cd30b997f3a41846f329db>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarkAllTodosMutation_user$data = {
  readonly id: string;
  readonly totalCount: number;
  readonly userId: string;
  readonly " $fragmentType": "MarkAllTodosMutation_user";
};
export type MarkAllTodosMutation_user$key = {
  readonly " $data"?: MarkAllTodosMutation_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarkAllTodosMutation_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "MarkAllTodosMutation_user",
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

(node as any).hash = "0a1185e6e1d42f4f68598deda435af9d";

export default node;
