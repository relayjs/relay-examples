/**
 * @generated SignedSource<<22cb4a785b593cbbfb683b3ce0a03594>>
 * @relayHash d970fd7dbf118794415dec7324d463e3
 * @flow
 * @lightSyntaxTransform
 */

/* eslint-disable */

'use strict';

// @relayRequestID d970fd7dbf118794415dec7324d463e3

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RenameTodoInput = {|
  clientMutationId?: ?string,
  id: string,
  text: string,
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
  response: RenameTodoMutation$data,
  variables: RenameTodoMutation$variables,
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
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RenameTodoMutation",
    "selections": (v1/*:: as any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "selections": (v1/*:: as any*/)
  },
  "params": {
    "id": "d970fd7dbf118794415dec7324d463e3",
    "metadata": {},
    "name": "RenameTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*:: as any*/).hash = "de4aa1639055c2e6a78ee22cce29870a";

export default ((node/*:: as any*/)/*:: as Mutation<
  RenameTodoMutation$variables,
  RenameTodoMutation$data,
>*/);
