/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime'
export type RootQueryVariables = {
  owner: string
  name: string
}
export type RootQueryResponse = {
  readonly repository: {
    readonly owner: {
      readonly login: string
    }
    readonly name: string
  } | null
}
export type RootQuery = {
  readonly response: RootQueryResponse
  readonly variables: RootQueryVariables
}

/*
query RootQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    owner {
      __typename
      login
      id
    }
    name
    id
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'owner',
        type: 'String!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'name',
        type: 'String!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'name',
        variableName: 'name',
      },
      {
        kind: 'Variable',
        name: 'owner',
        variableName: 'owner',
      },
    ],
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'login',
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    }
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'RootQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'repository',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'Repository',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'owner',
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: [v2 /*: any*/],
            },
            v3 /*: any*/,
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'RootQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'repository',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'Repository',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'owner',
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: [
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: '__typename',
                  args: null,
                  storageKey: null,
                },
                v2 /*: any*/,
                v4 /*: any*/,
              ],
            },
            v3 /*: any*/,
            v4 /*: any*/,
          ],
        },
      ],
    },
    params: {
      operationKind: 'query',
      name: 'RootQuery',
      id: null,
      text:
        'query RootQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      login\n      id\n    }\n    name\n    id\n  }\n}\n',
      metadata: {},
    },
  }
})()
;(node as any).hash = '86d44615100f8e82c5a3ff63daa08bd5'
export default node
