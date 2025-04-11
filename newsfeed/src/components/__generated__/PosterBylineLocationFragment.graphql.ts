/**
 * @generated SignedSource<<6f5bad5a0167500af12e06b13edb3006>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
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
