/**
 * @generated SignedSource<<b780cc076b35df8225533610048bf0fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsBodyFragment$data = {
  readonly id: string;
  readonly joined: string | null;
  readonly name: string | null;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null;
  readonly " $fragmentType": "PosterDetailsHovercardContentsBodyFragment";
};
export type PosterDetailsHovercardContentsBodyFragment$key = {
  readonly " $data"?: PosterDetailsHovercardContentsBodyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsBodyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterDetailsHovercardContentsBodyFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joined",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};

(node as any).hash = "ded249c8376bb374c8c5be005ba8523e";

export default node;
