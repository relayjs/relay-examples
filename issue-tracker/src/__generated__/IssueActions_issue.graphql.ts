/* tslint:disable */

import { ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type IssueActions_issue = {
  readonly id: string
  readonly closed: boolean
  readonly ' $refType': 'IssueActions_issue'
}
export type IssueActions_issue$data = IssueActions_issue
export type IssueActions_issue$key = {
  readonly ' $data'?: IssueActions_issue$data
  readonly ' $fragmentRefs': FragmentRefs<'IssueActions_issue'>
}

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'IssueActions_issue',
  type: 'Issue',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'closed',
      args: null,
      storageKey: null,
    },
  ],
}
;(node as any).hash = '12c79d27df99eb9656621cead33c9d08'
export default node
