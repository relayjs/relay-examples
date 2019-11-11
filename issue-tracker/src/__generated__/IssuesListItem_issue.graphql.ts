/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IssuesListItem_issue = {
    readonly id: string;
    readonly title: string;
    readonly " $refType": "IssuesListItem_issue";
};
export type IssuesListItem_issue$data = IssuesListItem_issue;
export type IssuesListItem_issue$key = {
    readonly " $data"?: IssuesListItem_issue$data;
    readonly " $fragmentRefs": FragmentRefs<"IssuesListItem_issue">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "IssuesListItem_issue",
  "type": "Issue",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '4759ca84c6b2c9e515e40652369fe5a9';
export default node;
