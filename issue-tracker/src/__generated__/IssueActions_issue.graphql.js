/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IssueActions_issue$ref: FragmentReference;
declare export opaque type IssueActions_issue$fragmentType: IssueActions_issue$ref;
export type IssueActions_issue = {|
  +id: string,
  +$refType: IssueActions_issue$ref,
|};
export type IssueActions_issue$data = IssueActions_issue;
export type IssueActions_issue$key = {
  +$data?: IssueActions_issue$data,
  +$fragmentRefs: IssueActions_issue$ref,
};
*/

const node /*: ReaderFragment*/ = {
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
  ],
};
// prettier-ignore
(node/*: any*/).hash = 'd5685c9da1b2a8edf75a49d1b58a22ab';
module.exports = node;
