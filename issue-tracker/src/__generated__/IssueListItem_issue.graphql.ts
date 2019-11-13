/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IssueListItem_issue = {
    readonly id: string;
    readonly title: string;
    readonly " $refType": "IssueListItem_issue";
};
export type IssueListItem_issue$data = IssueListItem_issue;
export type IssueListItem_issue$key = {
    readonly " $data"?: IssueListItem_issue$data;
    readonly " $fragmentRefs": FragmentRefs<"IssueListItem_issue">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "IssueListItem_issue",
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
(node as any).hash = '3d4a1f32013aca926236a60256c1f43e';
export default node;
