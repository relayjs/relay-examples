/**
 * @generated SignedSource<<5b7022008a86a725e75005c5d71e564f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButtonFragment$data = {
  readonly doesViewerLike: boolean | null;
  readonly id: string;
  readonly likeCount: number | null;
  readonly " $fragmentType": "StoryLikeButtonFragment";
};
export type StoryLikeButtonFragment$key = {
  readonly " $data"?: StoryLikeButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StoryLikeButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryLikeButtonFragment",
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
      "name": "likeCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doesViewerLike",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "617c1de721141eb511915302fb80c08d";

export default node;
