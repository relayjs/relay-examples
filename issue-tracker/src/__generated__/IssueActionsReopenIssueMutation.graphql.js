/**
 * @flow
 * @relayHash 8bc8e9af28299cc8ba03a1b3326731de
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

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'ReopenIssueInput!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'input',
        variableName: 'input',
      },
    ],
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'closed',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'IssueActionsReopenIssueMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'reopenIssue',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: 'ReopenIssuePayload',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'issue',
              storageKey: null,
              args: null,
              concreteType: 'Issue',
              plural: false,
              selections: [(v2 /*: any*/)],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'IssueActionsReopenIssueMutation',
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'reopenIssue',
          storageKey: null,
          args: (v1 /*: any*/),
          concreteType: 'ReopenIssuePayload',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'issue',
              storageKey: null,
              args: null,
              concreteType: 'Issue',
              plural: false,
              selections: [
                (v2 /*: any*/),
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'id',
                  args: null,
                  storageKey: null,
                },
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: 'mutation',
      name: 'IssueActionsReopenIssueMutation',
      id: null,
      text:
        'mutation IssueActionsReopenIssueMutation(\n  $input: ReopenIssueInput!\n) {\n  reopenIssue(input: $input) {\n    issue {\n      closed\n      id\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '6dbb9d9a672b1703eb0983667e9638db';
module.exports = node;
