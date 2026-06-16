/**
 * @generated SignedSource<<9baf271f109a2838157f618af88e621b>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogPostPreview_post$data = {
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "BlogPostPreview_post";
};
export type BlogPostPreview_post$key = {
  readonly " $data"?: BlogPostPreview_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogPostPreview_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogPostPreview_post",
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
  "type": "BlogPost",
  "abstractKey": null
};

(node as any).hash = "8cb8861c94062f8169421aaffe852b84";

export default node;
