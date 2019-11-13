/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeRootIssuesQueryVariables = {
    owner: string;
    name: string;
};
export type HomeRootIssuesQueryResponse = {
    readonly repository: {
        readonly " $fragmentRefs": FragmentRefs<"Issues_repository">;
    } | null;
};
export type HomeRootIssuesQuery = {
    readonly response: HomeRootIssuesQueryResponse;
    readonly variables: HomeRootIssuesQueryVariables;
};



/*
query HomeRootIssuesQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    ...Issues_repository
    id
  }
}

fragment IssueListItem_issue on Issue {
  id
  title
}

fragment Issues_repository on Repository {
  issues(first: 10, states: [OPEN]) {
    edges {
      node {
        ...IssueListItem_issue
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "owner",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "states",
    "value": [
      "OPEN"
    ]
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeRootIssuesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Issues_repository",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeRootIssuesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "issues",
            "storageKey": "issues(first:10,states:[\"OPEN\"])",
            "args": (v2/*: any*/),
            "concreteType": "IssueConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "IssueEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Issue",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
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
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "issues",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "Issues_issues",
            "filters": [
              "states"
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeRootIssuesQuery",
    "id": null,
    "text": "query HomeRootIssuesQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...Issues_repository\n    id\n  }\n}\n\nfragment IssueListItem_issue on Issue {\n  id\n  title\n}\n\nfragment Issues_repository on Repository {\n  issues(first: 10, states: [OPEN]) {\n    edges {\n      node {\n        ...IssueListItem_issue\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '123ee85bfef2bb303a99a7320127372f';
export default node;
