/**
 * @generated SignedSource<<17c5b7885c7d4b61222ff3625211cfb5>>
 * @relayHash 30c06ee843e060078521a91dae7c1121
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 30c06ee843e060078521a91dae7c1121
// @indirectDataDrivenDependency BlogPosts_viewer.allBlogPosts.edges.node.content {"branches":{"BlogPost":{"component":"BlogPostPreview","fragment":"BlogPostPreview_post$normalization.graphql"},"FancyBlogPost":{"component":"FancyBlogPostPreview","fragment":"FancyBlogPostPreview_post$normalization.graphql"}},"plural":true}

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageHomeQuery$variables = Record<PropertyKey, never>;
export type pageHomeQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"BlogPosts_viewer">;
  } | null | undefined;
};
export type pageHomeQuery = {
  response: pageHomeQuery$data;
  variables: pageHomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "createdAt": "desc"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageHomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BlogPosts_viewer"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageHomeQuery",
    "selections": [
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
            "args": (v0/*:: as any*/),
            "concreteType": "BlogPostConnection",
            "kind": "LinkedField",
            "name": "allBlogPosts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BlogPostConnectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Post",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "supported",
                            "value": "GmUNy"
                          }
                        ],
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "content",
                        "plural": false,
                        "selections": [
                          (v1/*:: as any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "documentName": "BlogPosts_viewer",
                                "fragmentName": "FancyBlogPostPreview_post",
                                "fragmentPropName": "post",
                                "kind": "ModuleImport"
                              },
                              (v2/*:: as any*/)
                            ],
                            "type": "FancyBlogPost",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "documentName": "BlogPosts_viewer",
                                "fragmentName": "BlogPostPreview_post",
                                "fragmentPropName": "post",
                                "kind": "ModuleImport"
                              },
                              (v2/*:: as any*/)
                            ],
                            "type": "BlogPost",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": "content(supported:\"GmUNy\")"
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
                      },
                      (v1/*:: as any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "BlogPostConnectionPageInfo",
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
            "storageKey": "allBlogPosts(first:2,orderBy:{\"createdAt\":\"desc\"})"
          },
          {
            "alias": null,
            "args": (v0/*:: as any*/),
            "filters": [
              "orderBy"
            ],
            "handle": "connection",
            "key": "BlogPosts_allBlogPosts",
            "kind": "LinkedHandle",
            "name": "allBlogPosts"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "30c06ee843e060078521a91dae7c1121",
    "metadata": {},
    "name": "pageHomeQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e70d6867f89b05835b7afe7ec1327884";

export default node;
