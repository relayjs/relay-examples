/**
 * @generated SignedSource<<325c07af433a4fd1b68a24c4bcc220a9>>
 * @relayHash 21f5228a11d5d310454079624592b393
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 21f5228a11d5d310454079624592b393
// @indirectDataDrivenDependency BlogPosts_viewer.allBlogPosts.edges.node.content {"branches":{"BlogPost":{"component":"BlogPostPreview","fragment":"BlogPostPreview_post$normalization.graphql"},"FancyBlogPost":{"component":"FancyBlogPostPreview","fragment":"FancyBlogPostPreview_post$normalization.graphql"}},"plural":true}

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogPostsPaginationQuery$variables = {
  after?: string | null | undefined;
  first?: number | null | undefined;
};
export type BlogPostsPaginationQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"BlogPosts_viewer">;
  } | null | undefined;
};
export type BlogPostsPaginationQuery = {
  response: BlogPostsPaginationQuery$data;
  variables: BlogPostsPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 2,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v3 = [
  (v1/*:: as any*/),
  (v2/*:: as any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "createdAt": "desc"
    }
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogPostsPaginationQuery",
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
            "args": [
              (v1/*:: as any*/),
              (v2/*:: as any*/)
            ],
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
    "argumentDefinitions": (v0/*:: as any*/),
    "kind": "Operation",
    "name": "BlogPostsPaginationQuery",
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
            "args": (v3/*:: as any*/),
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
                          (v4/*:: as any*/),
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
                              (v5/*:: as any*/)
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
                              (v5/*:: as any*/)
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
                      (v4/*:: as any*/)
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*:: as any*/),
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
    "id": "21f5228a11d5d310454079624592b393",
    "metadata": {},
    "name": "BlogPostsPaginationQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1a7193638e988033fabd4f33ef05068e";

export default node;
