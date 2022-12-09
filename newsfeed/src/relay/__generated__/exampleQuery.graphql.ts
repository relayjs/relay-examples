/**
 * @generated SignedSource<<2b7f2bdba9e7a4a8553641eb510fde4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type exampleQuery$variables = {};
export type exampleQuery$data = {
  readonly viewer: {
    readonly __typename: "Viewer";
  } | null;
};
export type exampleQuery = {
  response: exampleQuery$data;
  variables: exampleQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "exampleQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "exampleQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6220ee8f9d94598a5124b6a691acf6b3",
    "id": null,
    "metadata": {},
    "name": "exampleQuery",
    "operationKind": "query",
    "text": "query exampleQuery {\n  viewer {\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "b37fc43422b1e489bd4928ccc787b725";

export default node;
