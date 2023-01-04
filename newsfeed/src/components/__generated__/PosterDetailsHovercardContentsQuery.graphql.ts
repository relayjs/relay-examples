/**
 * @generated SignedSource<<42003b0ddb424dee5500be014fb4eafb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsQuery$variables = {};
export type PosterDetailsHovercardContentsQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsBodyFragment">;
  } | null;
};
export type PosterDetailsHovercardContentsQuery = {
  response: PosterDetailsHovercardContentsQuery$data;
  variables: PosterDetailsHovercardContentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "7"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PosterDetailsHovercardContentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PosterDetailsHovercardContentsBodyFragment"
              }
            ],
            "type": "Actor",
            "abstractKey": "__isActor"
          }
        ],
        "storageKey": "node(id:\"7\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PosterDetailsHovercardContentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "joined",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "altText",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Actor",
            "abstractKey": "__isActor"
          }
        ],
        "storageKey": "node(id:\"7\")"
      }
    ]
  },
  "params": {
    "cacheID": "60ecc2a435b5250ebfa3429259bd9555",
    "id": null,
    "metadata": {},
    "name": "PosterDetailsHovercardContentsQuery",
    "operationKind": "query",
    "text": "query PosterDetailsHovercardContentsQuery {\n  node(id: \"7\") {\n    __typename\n    ... on Actor {\n      __isActor: __typename\n      ...PosterDetailsHovercardContentsBodyFragment\n    }\n    id\n  }\n}\n\nfragment ImageFragment on Image {\n  url\n  altText\n}\n\nfragment PosterDetailsHovercardContentsBodyFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  joined\n  profilePicture {\n    ...ImageFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "b364cc37fc258ebda3e5848d42edf9e6";

export default node;
