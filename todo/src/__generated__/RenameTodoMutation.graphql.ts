/**
 * @generated SignedSource<<9c3a08ee841162f19cd9ff8622472790>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RenameTodoInput = {
  clientMutationId?: string | null | undefined;
  id: string;
  text: string;
};
export type RenameTodoMutation$variables = {
  input: RenameTodoInput;
};
export type RenameTodoMutation$data = {
  readonly renameTodo: {
    readonly todo: {
      readonly id: string;
      readonly text: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type RenameTodoMutation = {
  response: RenameTodoMutation$data;
  variables: RenameTodoMutation$variables;
};

const node: ConcreteRequest = (function(){
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
    "cacheID": "d970fd7dbf118794415dec7324d463e3",
    "id": null,
    "metadata": {},
    "name": "RenameTodoMutation",
    "operationKind": "mutation",
    "text": "mutation RenameTodoMutation(\n  $input: RenameTodoInput!\n) {\n  renameTodo(input: $input) {\n    todo {\n      id\n      text\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "de4aa1639055c2e6a78ee22cce29870a";

export default node;
