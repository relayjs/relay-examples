/**
 * @generated SignedSource<<83f1ae992e44c88b1b87ee297d60812d>>
 * @relayHash d66bd26f70847334691c77fc8c519c05
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID d66bd26f70847334691c77fc8c519c05

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$fragmentType } from "./RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo.graphql";
export type ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$variables = {|
  id: string,
|};
export type ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$data = {|
  +node: ?{|
    +$fragmentSpreads: RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$fragmentType,
  |},
|};
export type ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo = {|
  response: ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$data,
  variables: ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RefetchableClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "complete",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "text",
                "storageKey": null
              }
            ],
            "type": "Todo",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "d66bd26f70847334691c77fc8c519c05",
    "metadata": {},
    "name": "ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*: any*/).hash = "18632abaf19328551dd7b5862d8ee194";

module.exports = ((node/*: any*/)/*: Query<
  ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$variables,
  ClientEdgeQuery_TodoAppQuery_clientTodoList__items__todo$data,
>*/);
