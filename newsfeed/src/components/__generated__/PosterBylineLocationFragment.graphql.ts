/**
 * @generated SignedSource<<0bbef55dbad911e9382bb50fa68e0953>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterBylineLocationFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "PosterBylineLocationFragment";
};
export type PosterBylineLocationFragment$key = {
  readonly " $data"?: PosterBylineLocationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterBylineLocationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterBylineLocationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Location",
  "abstractKey": null
};

(node as any).hash = "a7528e0db60f65714585b53772e995df";

export default node;
