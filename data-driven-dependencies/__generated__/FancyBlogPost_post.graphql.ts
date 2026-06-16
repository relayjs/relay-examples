/**
 * @generated SignedSource<<2e423cd6c37e4fe847643b93199c7bf6>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FancyBlogPost_post$data = {
  readonly content: string;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "FancyBlogPost_post";
};
export type FancyBlogPost_post$key = {
  readonly " $data"?: FancyBlogPost_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"FancyBlogPost_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FancyBlogPost_post",
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

(node as any).hash = "597f3542e3734977f069b7ca844977cf";

export default node;
