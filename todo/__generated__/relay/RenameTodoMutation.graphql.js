/**
 * @generated SignedSource<<18d35b92bc0d65faf098537a1bbf499a>>
 * @relayHash d970fd7dbf118794415dec7324d463e3
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID b15146a9327f8059fa2dbf5499440d6e6ec9f82f

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RenameTodoInput = {|
  id: string,
  text: string,
  clientMutationId?: ?string,
|};
export type RenameTodoMutation$variables = {|
  input: RenameTodoInput,
|};
export type RenameTodoMutation$data = {|
  +renameTodo: ?{|
    +todo: {|
      +id: string,
      +text: string,
    |},
  |},
|};
export type RenameTodoMutation = {|
  variables: RenameTodoMutation$variables,
  response: RenameTodoMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RenameTodoPayload",
    "kind": "LinkedField",
    "name": "renameTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
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
            "name": "text",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RenameTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "b15146a9327f8059fa2dbf5499440d6e6ec9f82f",
    "metadata": {},
    "name": "RenameTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "de4aa1639055c2e6a78ee22cce29870a";

module.exports = ((node/*: any*/)/*: Mutation<
  RenameTodoMutation$variables,
  RenameTodoMutation$data,
>*/);
