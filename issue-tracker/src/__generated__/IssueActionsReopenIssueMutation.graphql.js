/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ReopenIssueInput = {|
  issueId: string,
  clientMutationId?: ?string,
|};
export type IssueActionsReopenIssueMutationVariables = {|
  input: ReopenIssueInput
|};
export type IssueActionsReopenIssueMutationResponse = {|
  +reopenIssue: ?{|
    +issue: ?{|
      +closed: boolean
    |}
  |}
|};
export type IssueActionsReopenIssueMutation = {|
  variables: IssueActionsReopenIssueMutationVariables,
  response: IssueActionsReopenIssueMutationResponse,
|};
*/


/*
mutation IssueActionsReopenIssueMutation(
  $input: ReopenIssueInput!
) {
  reopenIssue(input: $input) {
    issue {
      closed
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "closed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueActionsReopenIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReopenIssuePayload",
        "kind": "LinkedField",
        "name": "reopenIssue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueActionsReopenIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReopenIssuePayload",
        "kind": "LinkedField",
        "name": "reopenIssue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "88165904756e596325dcd84150ec8ed6",
    "id": null,
    "metadata": {},
    "name": "IssueActionsReopenIssueMutation",
    "operationKind": "mutation",
    "text": "mutation IssueActionsReopenIssueMutation(\n  $input: ReopenIssueInput!\n) {\n  reopenIssue(input: $input) {\n    issue {\n      closed\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6dbb9d9a672b1703eb0983667e9638db';

module.exports = node;
