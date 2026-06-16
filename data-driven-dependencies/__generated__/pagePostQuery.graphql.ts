/**
 * @generated SignedSource<<5fd7c504c6b833150c4c1ae282c9030e>>
 * @relayHash b42d867cac04d5f9a674eeae09ba6951
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b42d867cac04d5f9a674eeae09ba6951
// @dataDrivenDependency pagePostQuery.blogPost.content {"branches":{"BlogPost":{"component":"BlogPost","fragment":"BlogPost_post$normalization.graphql"},"FancyBlogPost":{"component":"FancyBlogPost","fragment":"FancyBlogPost_post$normalization.graphql"}},"plural":false}

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pagePostQuery$variables = {
  id: string;
};
export type pagePostQuery$data = {
  readonly blogPost: {
    readonly content: {
      readonly __fragmentPropName?: string | null | undefined;
      readonly __module_component?: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"BlogPost_post" | "FancyBlogPost_post">;
    } | null | undefined;
  } | null | undefined;
};
export type pagePostQuery = {
  response: pagePostQuery$data;
  variables: pagePostQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "supported",
    "value": "GmUNy"
  }
],
v3 = {
  "args": null,
  "documentName": "pagePostQuery",
  "fragmentName": "FancyBlogPost_post",
  "fragmentPropName": "post",
  "kind": "ModuleImport"
},
v4 = {
  "args": null,
  "documentName": "pagePostQuery",
  "fragmentName": "BlogPost_post",
  "fragmentPropName": "post",
  "kind": "ModuleImport"
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
    "name": "pagePostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "blogPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*:: as any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "content",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*:: as any*/)
                ],
                "type": "FancyBlogPost",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*:: as any*/)
                ],
                "type": "BlogPost",
                "abstractKey": null
              }
            ],
            "storageKey": "content(supported:\"GmUNy\")"
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
    "name": "pagePostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*:: as any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "blogPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*:: as any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "content",
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
                "kind": "InlineFragment",
                "selections": [
                  (v3/*:: as any*/),
                  (v5/*:: as any*/)
                ],
                "type": "FancyBlogPost",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*:: as any*/),
                  (v5/*:: as any*/)
                ],
                "type": "BlogPost",
                "abstractKey": null
              }
            ],
            "storageKey": "content(supported:\"GmUNy\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b42d867cac04d5f9a674eeae09ba6951",
    "metadata": {},
    "name": "pagePostQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c46d061817ae538f797e68ea7c3e46e5";

export default node;
