/**
 * @generated SignedSource<<0895a20ce95409162783f1e0e99ab346>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListFooter_todoConnection$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RemoveCompletedTodosMutation_todoConnection">;
  readonly " $fragmentType": "TodoListFooter_todoConnection";
};
export type TodoListFooter_todoConnection$key = {
  readonly " $data"?: TodoListFooter_todoConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListFooter_todoConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "throwOnFieldError": true
  },
  "name": "TodoListFooter_todoConnection",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RemoveCompletedTodosMutation_todoConnection"
    }
  ],
  "type": "TodoConnection",
  "abstractKey": null
};

(node as any).hash = "b710d2f515db2376d2e7338c019e6f40";

export default node;
