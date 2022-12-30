/**
 * @generated SignedSource<<319613bea11e3aede82f8eb3f606b4e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SidebarQuery$variables = {};
export type SidebarQuery$data = {
  readonly viewer: {
    readonly __typename: "Viewer";
  } | null;
};
export type SidebarQuery = {
  response: SidebarQuery$data;
  variables: SidebarQuery$variables;
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
    "name": "SidebarQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SidebarQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "18fd4f1ba91df950ed1d37f571103f67",
    "id": null,
    "metadata": {},
    "name": "SidebarQuery",
    "operationKind": "query",
    "text": "query SidebarQuery {\n  viewer {\n    __typename\n  }\n}\n"
  }
};
})();

(node as any).hash = "3b41f3b15b6d83237ca61c0a6c329edd";

export default node;
