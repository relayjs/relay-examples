/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime'
export type CloseIssueInput = {
  readonly issueId: string
  readonly clientMutationId?: string | null
}
export type IssueActionsCloseIssueMutationVariables = {
  input: CloseIssueInput
}
export type IssueActionsCloseIssueMutationResponse = {
  readonly closeIssue: {
    readonly issue: {
      readonly closed: boolean
    } | null
  } | null
}
export type IssueActionsCloseIssueMutation = {
  readonly response: IssueActionsCloseIssueMutationResponse
  readonly variables: IssueActionsCloseIssueMutationVariables
}

/*
mutation IssueActionsCloseIssueMutation(
  $input: CloseIssueInput!
) {
  closeIssue(input: $input) {
    issue {
      closed
      id
    }
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'input',
        type: 'CloseIssueInput!',
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
    }
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'IssueActionsCloseIssueMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'closeIssue',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'CloseIssuePayload',
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
              selections: [v2 /*: any*/],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'IssueActionsCloseIssueMutation',
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'closeIssue',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'CloseIssuePayload',
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
                v2 /*: any*/,
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
      name: 'IssueActionsCloseIssueMutation',
      id: null,
      text:
        'mutation IssueActionsCloseIssueMutation(\n  $input: CloseIssueInput!\n) {\n  closeIssue(input: $input) {\n    issue {\n      closed\n      id\n    }\n  }\n}\n',
      metadata: {},
    },
  }
})()
;(node as any).hash = '51e445c25b3f4b3c48c3d6ca6c5f2f5a'
export default node
