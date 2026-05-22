/**
 * @generated SignedSource<<30af814aea159ab3ce3774711e13df32>>
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
  "metadata": {
    "throwOnFieldError": true
  },
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

(node as any).hash = "1036d40b9ba98f7ba63f0fe0026d878c";

export default node;
