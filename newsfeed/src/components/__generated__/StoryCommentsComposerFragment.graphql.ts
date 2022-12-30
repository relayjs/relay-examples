/**
 * @generated SignedSource<<fbae73332fbd1cb294202f91b91b7ad9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryCommentsComposerFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "StoryCommentsComposerFragment";
};
export type StoryCommentsComposerFragment$key = {
  readonly " $data"?: StoryCommentsComposerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StoryCommentsComposerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryCommentsComposerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "38598953772a95d8c9521072ce7eb169";

export default node;
