/**
 * @generated SignedSource<<612cf7d66919543e0397d39aeeb54bf0>>
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
  "metadata": null,
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

(node as any).hash = "1c83b63e685c83d6fa657d808ae754eb";

export default node;
