/**
 * @generated SignedSource<<bd1eab41193fbd65a9903496b3fafd5f>>
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
declare export opaque type RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$fragmentType: FragmentType;
import type { ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$variables } from "./ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo.graphql";
export type RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$data = {|
  +id: string,
  +$fragmentSpreads: Todo_todo$fragmentType,
  +$fragmentType: RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$fragmentType,
|};
export type RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$key = {
  +$data?: RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$data,
  +$fragmentSpreads: RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$fragmentType,
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
      "operation": require('./ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo",
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

(node/*: any*/).hash = "b170dd5c8ebeb14f4e05b3b7b4bde6ef";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$fragmentType,
  RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$data,
  ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$variables,
>*/);
