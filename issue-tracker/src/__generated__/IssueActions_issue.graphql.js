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
  +closed: boolean,
  +$refType: IssueActions_issue$ref,
|};
export type IssueActions_issue$data = IssueActions_issue;
export type IssueActions_issue$key = {
  +$data?: IssueActions_issue$data,
  +$fragmentRefs: IssueActions_issue$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueActions_issue",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "closed",
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '12c79d27df99eb9656621cead33c9d08';

module.exports = node;
