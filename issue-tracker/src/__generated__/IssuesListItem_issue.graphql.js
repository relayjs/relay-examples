/**
 * @generated SignedSource<<94a75a5609e86c2becbf290ec31293b8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type IssuesListItem_issue$fragmentType: FragmentType;
export type IssuesListItem_issue$data = {|
  +id: string,
  +title: string,
  +$fragmentType: IssuesListItem_issue$fragmentType,
|};
export type IssuesListItem_issue$key = {
  +$data?: IssuesListItem_issue$data,
  +$fragmentSpreads: IssuesListItem_issue$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
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

(node/*: any*/).hash = "4759ca84c6b2c9e515e40652369fe5a9";

module.exports = ((node/*: any*/)/*: Fragment<
  IssuesListItem_issue$fragmentType,
  IssuesListItem_issue$data,
>*/);
