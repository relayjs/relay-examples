/**
 * @generated SignedSource<<418761ce627a91dbe761cfcc3b8c7b7b>>
 * @relayHash df905331b7506dcd83ddfb5c065b8824
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID df905331b7506dcd83ddfb5c065b8824

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$fragmentType } from "./RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo.graphql";
export type ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$variables = {|
  id: string,
|};
export type ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$data = {|
  +node: ?{|
    +$fragmentSpreads: RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$fragmentType,
  |},
|};
export type ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo = {|
  response: ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$data,
  variables: ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$variables,
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
    "name": "ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo",
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
            "name": "RefetchableClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo"
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
    "name": "ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo",
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
                "name": "text",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "complete",
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
    "id": "df905331b7506dcd83ddfb5c065b8824",
    "metadata": {},
    "name": "ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*: any*/).hash = "27bd3ae687d0b9fb0f4c64abf83274ef";

module.exports = ((node/*: any*/)/*: Query<
  ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$variables,
  ClientEdgeQuery_TodoAppQuery_localPlayerQueue__list__todo$data,
>*/);
