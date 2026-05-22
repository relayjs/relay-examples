/**
 * @generated SignedSource<<ce975d41d5d61f8549e3e48574a639de>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListFooter_user$data = {
  readonly completedCount: number;
  readonly totalCount: number;
  readonly " $fragmentSpreads": FragmentRefs<"RemoveCompletedTodosMutation_user">;
  readonly " $fragmentType": "TodoListFooter_user";
};
export type TodoListFooter_user$key = {
  readonly " $data"?: TodoListFooter_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListFooter_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListFooter_user",
  "selections": [
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveCompletedTodosMutation_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "58e3bb4be554d7ad9751be4c219857c6";

export default node;
