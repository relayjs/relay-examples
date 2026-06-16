/**
 * @generated SignedSource<<0c0b0c6421038fc678b2cd5191884aa4>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency BlogPosts_viewer.allBlogPosts.edges.node.content {"branches":{"BlogPost":{"component":"BlogPostPreview","fragment":"BlogPostPreview_post$normalization.graphql"},"FancyBlogPost":{"component":"FancyBlogPostPreview","fragment":"FancyBlogPostPreview_post$normalization.graphql"}},"plural":true}

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogPosts_viewer$data = {
  readonly allBlogPosts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __id: string;
        readonly content: {
          readonly __fragmentPropName?: string | null | undefined;
          readonly __module_component?: string | null | undefined;
          readonly " $fragmentSpreads": FragmentRefs<"BlogPostPreview_post" | "FancyBlogPostPreview_post">;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "BlogPosts_viewer";
};
export type BlogPosts_viewer$key = {
  readonly " $data"?: BlogPosts_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogPosts_viewer">;
};

import BlogPostsPaginationQuery_graphql from './BlogPostsPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "allBlogPosts"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*:: as any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*:: as any*/)
      },
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": BlogPostsPaginationQuery_graphql
    }
  },
  "name": "BlogPosts_viewer",
  "selections": [
    {
      "alias": "allBlogPosts",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "createdAt": "desc"
          }
        }
      ],
      "concreteType": "BlogPostConnection",
      "kind": "LinkedField",
      "name": "__BlogPosts_allBlogPosts_connection",
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
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "args": null,
                          "documentName": "BlogPosts_viewer",
                          "fragmentName": "FancyBlogPostPreview_post",
                          "fragmentPropName": "post",
                          "kind": "ModuleImport"
                        }
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
                        }
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
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
      "storageKey": "__BlogPosts_allBlogPosts_connection(orderBy:{\"createdAt\":\"desc\"})"
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
})();

(node as any).hash = "1a7193638e988033fabd4f33ef05068e";

export default node;
