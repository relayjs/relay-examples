/**
 * @generated SignedSource<<4be523362711b7bff00e4eceebbc8f97>>
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { RemoveCompletedTodosMutation_todoConnection$fragmentType } from "./RemoveCompletedTodosMutation_todoConnection.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type TodoListFooter_todoConnection$fragmentType: FragmentType;
export type TodoListFooter_todoConnection$data = {|
  +$fragmentSpreads: RemoveCompletedTodosMutation_todoConnection$fragmentType,
  +$fragmentType: TodoListFooter_todoConnection$fragmentType,
|};
export type TodoListFooter_todoConnection$key = {
  +$data?: TodoListFooter_todoConnection$data,
  +$fragmentSpreads: TodoListFooter_todoConnection$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
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

(node/*:: as any*/).hash = "2585c71f1d6b3fbd361dbef35fad316b";

export default ((node/*:: as any*/)/*:: as Fragment<
  TodoListFooter_todoConnection$fragmentType,
  TodoListFooter_todoConnection$data,
>*/);
