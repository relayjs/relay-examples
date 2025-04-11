/**
 * @generated SignedSource<<728dc0bbb2ff620da223a2331a580746>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { Todo_todo$fragmentType } from "./Todo_todo.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$fragmentType: FragmentType;
import type { ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$variables } from "./ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo.graphql";
export type RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$data = {|
  +id: string,
  +$fragmentSpreads: Todo_todo$fragmentType,
  +$fragmentType: RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$fragmentType,
|};
export type RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$key = {
  +$data?: RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$data,
  +$fragmentSpreads: RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Todo_todo"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "18632abaf19328551dd7b5862d8ee194";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$fragmentType,
  RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$data,
  ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$variables,
>*/);
