/**
 * @generated SignedSource<<2dbe435ed71baeb05d44b78f766a36ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewerProfileFragment$data = {
  readonly actor: {
    readonly name: string | null | undefined;
    readonly profilePicture: {
      readonly url: string;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ViewerProfileFragment";
};
export type ViewerProfileFragment$key = {
  readonly " $data"?: ViewerProfileFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewerProfileFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewerProfileFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "actor",
      "plural": false,
      "selections": [
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
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "profilePicture",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "ce11405542f5c0792520c1820165a5fd";

export default node;
