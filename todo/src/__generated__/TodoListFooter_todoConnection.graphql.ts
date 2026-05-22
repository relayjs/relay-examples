/**
 * @generated SignedSource<<8e37410805e153f7ced72b71e3389c4a>>
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
  "metadata": null,
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

(node as any).hash = "2585c71f1d6b3fbd361dbef35fad316b";

export default node;
