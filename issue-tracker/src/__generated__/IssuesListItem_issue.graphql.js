/**
 * @generated SignedSource<<57f776a791ab461e30d9a99a1418105f>>
 * @flow
 * @lightSyntaxTransform
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

(node/*:: as any*/).hash = "4759ca84c6b2c9e515e40652369fe5a9";

export default ((node/*:: as any*/)/*:: as Fragment<
  IssuesListItem_issue$fragmentType,
  IssuesListItem_issue$data,
>*/);
