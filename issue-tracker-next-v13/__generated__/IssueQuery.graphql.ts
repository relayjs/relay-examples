/**
 * @generated SignedSource<<4b3e31cba708959a1e48430e68e36d84>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest } from 'relay-runtime';
export type IssueQuery$variables = {
  issueNumber: number;
  name: string;
  owner: string;
};
export type IssueQuery$data = {
  readonly repository: {
    readonly issue: {
      readonly author: {
        readonly login: string;
      } | null | undefined;
      readonly bodyText: string;
      readonly title: string;
    } | null | undefined;
  } | null | undefined;
};
export type IssueQuery = {
  response: IssueQuery$data;
  variables: IssueQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "issueNumber"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v3 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "number",
    "variableName": "issueNumber"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bodyText",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*:: as any*/),
      (v1/*:: as any*/),
      (v2/*:: as any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*:: as any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*:: as any*/),
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              (v5/*:: as any*/),
              (v6/*:: as any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": [
                  (v7/*:: as any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [
      (v2/*:: as any*/),
      (v1/*:: as any*/),
      (v0/*:: as any*/)
    ],
    "kind": "Operation",
    "name": "IssueQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*:: as any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*:: as any*/),
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              (v5/*:: as any*/),
              (v6/*:: as any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  (v7/*:: as any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v8/*:: as any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              (v8/*:: as any*/)
            ],
            "storageKey": null
          },
          (v8/*:: as any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1d0499258645a6a8383faa5665df108a",
    "id": null,
    "metadata": {},
    "name": "IssueQuery",
    "operationKind": "query",
    "text": "query IssueQuery(\n  $owner: String!\n  $name: String!\n  $issueNumber: Int!\n) {\n  repository(owner: $owner, name: $name) {\n    issue(number: $issueNumber) {\n      title\n      bodyText\n      author {\n        __typename\n        login\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f22eae7c2f4ff42ba035cf1c7d162f4b";

export default node;
