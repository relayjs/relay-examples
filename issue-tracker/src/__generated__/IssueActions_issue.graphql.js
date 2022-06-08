/**
 * @generated SignedSource<<9e84403d946ea2fa1962a6245812b55f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type IssueActions_issue$fragmentType: FragmentType;
export type IssueActions_issue$data = {|
  +closed: boolean,
  +id: string,
  +$fragmentType: IssueActions_issue$fragmentType,
|};
export type IssueActions_issue$key = {
  +$data?: IssueActions_issue$data,
  +$fragmentSpreads: IssueActions_issue$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
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

(node/*: any*/).hash = "12c79d27df99eb9656621cead33c9d08";

module.exports = ((node/*: any*/)/*: Fragment<
  IssueActions_issue$fragmentType,
  IssueActions_issue$data,
>*/);
