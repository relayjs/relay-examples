/**
 * @generated SignedSource<<3a39c521dc0c9e0a1c210a6130d94f62>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FancyBlogPostPreview_post$data = {
  readonly content: string;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "FancyBlogPostPreview_post";
};
export type FancyBlogPostPreview_post$key = {
  readonly " $data"?: FancyBlogPostPreview_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"FancyBlogPostPreview_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FancyBlogPostPreview_post",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "FancyBlogPost",
  "abstractKey": null
};

(node as any).hash = "8e4e6977ff276d096815cc14ea464833";

export default node;
