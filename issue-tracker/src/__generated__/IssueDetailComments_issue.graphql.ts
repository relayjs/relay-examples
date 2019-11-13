/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IssueDetailComments_issue = {
    readonly comments: {
        readonly edges: ReadonlyArray<{
            readonly __id: string;
            readonly node: {
                readonly id: string;
                readonly author: {
                    readonly login: string;
                    readonly avatarUrl: unknown;
                } | null;
                readonly body: string;
            } | null;
        } | null> | null;
    };
    readonly id: string | null;
    readonly " $refType": "IssueDetailComments_issue";
};
export type IssueDetailComments_issue$data = IssueDetailComments_issue;
export type IssueDetailComments_issue$key = {
    readonly " $data"?: IssueDetailComments_issue$data;
    readonly " $fragmentRefs": FragmentRefs<"IssueDetailComments_issue">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "comments"
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "IssueDetailComments_issue",
  "type": "Issue",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "operation": require('./IssueDetailCommentsQuery.graphql.ts'),
      "fragmentPathInResult": [
        "node"
      ]
    }
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "comments",
      "name": "__IssueDetailComments_comments_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "IssueCommentConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "IssueCommentEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "IssueComment",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "author",
                  "storageKey": null,
                  "args": null,
                  "concreteType": null,
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "login",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "avatarUrl",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "body",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__id",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    (v1/*: any*/)
  ]
};
})();
(node as any).hash = '674952f209c2653f27a5fad5539df511';
export default node;
