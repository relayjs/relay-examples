/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IssuesListItem_issue$ref: FragmentReference;
declare export opaque type IssuesListItem_issue$fragmentType: IssuesListItem_issue$ref;
export type IssuesListItem_issue = {|
  +id: string,
  +title: string,
  +$refType: IssuesListItem_issue$ref,
|};
export type IssuesListItem_issue$data = IssuesListItem_issue;
export type IssuesListItem_issue$key = {
  +$data?: IssuesListItem_issue$data,
  +$fragmentRefs: IssuesListItem_issue$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssuesListItem_issue",
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
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4759ca84c6b2c9e515e40652369fe5a9';

module.exports = node;
