/**
 * @generated SignedSource<<50879b73aceb669b15e5662d7d078a41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Query } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type MainViewQuery$variables = {
  name: string;
  owner: string;
};
export type MainViewQuery$data = {
  readonly repository: {
    readonly name: string;
    readonly owner: {
      readonly login: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"IssuesFragment">;
  } | null;
};
export type MainViewQuery = {
  response: MainViewQuery$data;
  variables: MainViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "states",
    "value": "OPEN"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IssuesFragment"
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
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "MainViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "IssueConnection",
            "kind": "LinkedField",
            "name": "issues",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IssueEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Issue",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "number",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "author",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issues(first:10,states:\"OPEN\")"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": [
              "states"
            ],
            "handle": "connection",
            "key": "Issues_issues",
            "kind": "LinkedHandle",
            "name": "issues"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "356ba839af33d708f4e28481fa2811da",
    "id": null,
    "metadata": {},
    "name": "MainViewQuery",
    "operationKind": "query",
    "text": "query MainViewQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      login\n      id\n    }\n    name\n    ...IssuesFragment\n    id\n  }\n}\n\nfragment IssuesFragment on Repository {\n  issues(first: 10, states: OPEN) {\n    edges {\n      node {\n        title\n        number\n        author {\n          __typename\n          login\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "6606860b2141c6515778c8ca2ae12d5b";

export default node;
